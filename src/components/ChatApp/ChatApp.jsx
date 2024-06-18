import {useEffect, useRef, useState} from 'react';
import {Author, ChatType, MessageType} from '../../constants/constants.js';
import {mockAvatarMe, mockAvatarMonet} from '../../constants/mockData.js';
import {dateTimeTwoDigits} from '../../utils/dateTime.js';
import ButtonSelector from '../ButtonSelector/ButtonSelector';
import './ChatApp.css';
import ChatHeader from '../ChatHeader/ChatHeader';
import MessageInput from '../MessageInput/MessageInput';
import MessageList from '../MessageList/MessageList';

const ChatApp = ({
                   newMessagesCount,
                   fetchAIUrl,
                   title,
                   height,
                   width,
                   initialGroupChatMessages = [],
                   initialMonetChatMessages = [],
                 }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [count, setCount] = useState(newMessagesCount);
  const [selectedChat, setSelectedChat] = useState(ChatType.GROUP);
  const [showBadge, setShowBadge] = useState(true);
  const [messages, setMessages] = useState(initialGroupChatMessages);
  const [isTyping, setIsTyping] = useState(false);
  const controllerRef = useRef(null);

  const handleSendMessage = async (text) => {
    const newMessage = {
      id: messages.length + 1,
      author: Author.ME,
      time: dateTimeTwoDigits(),
      text,
      type: MessageType.SENT,
      avatar: mockAvatarMe,
    };
    setMessages([...messages, newMessage]);

    if (selectedChat === ChatType.MONET) {
      setIsTyping(true);
      controllerRef.current = new AbortController();
      const signal = controllerRef.current.signal;

      const response = await fetch(fetchAIUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({model: 'phi3:mini', prompt: text}),
        signal,
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let result = '';
      let responseText = '';

      const streamProcessor = async () => {
        let keepReading = true;
        while (keepReading) {
          const {done, value} = await reader.read();
          if (done) {
            keepReading = false;
            break;
          }
          result += decoder.decode(value, {stream: true});

          try {
            const parsedResult = JSON.parse(result);
            responseText += parsedResult.response;
            result = '';

            setMessages((prevMessages) => {
              const updatedMessages = [...prevMessages];
              const lastMessage = updatedMessages[updatedMessages.length - 1];
              if (lastMessage.author === Author.MONET && lastMessage.type === MessageType.RECEIVED) {
                lastMessage.text = responseText;
              } else {
                updatedMessages.push({
                  id: updatedMessages.length + 1,
                  author: Author.MONET,
                  time: dateTimeTwoDigits(),
                  text: responseText,
                  type: MessageType.RECEIVED,
                  avatar: mockAvatarMonet,
                });
              }
              return updatedMessages;
            });
          } catch (e) {
            /* empty */
          }
        }
      };

      await streamProcessor();
      setIsTyping(false);
    }
  };

  const stopRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
      setIsTyping(false);
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  useEffect(() => {
    setCount(newMessagesCount);
    setShowBadge(true);
  }, [newMessagesCount]);

  useEffect(() => {
    setMessages(selectedChat === ChatType.GROUP ? initialGroupChatMessages : initialMonetChatMessages);
  }, [selectedChat]);

  return (
    <div className={`chat-app ${isMinimized ? 'minimized' : ''}`}
         style={{height: isMinimized ? '40px' : height, width}}>
      <ChatHeader toggleMinimize={toggleMinimize} title={title}/>
      {!isMinimized && (
        <>
          <ButtonSelector selectedChat={selectedChat} setSelectedChat={setSelectedChat}/>
          <MessageList
            messages={messages ?? []}
            newMessagesCount={count}
            showNewMessageBadge={showBadge && !isMinimized}
            onCloseBadge={() => setShowBadge(false)}
            stopRequest={stopRequest}
            isTyping={isTyping}
            selectedChat={selectedChat}
          />
          <MessageInput onSendMessage={handleSendMessage}/>
        </>
      )}
    </div>
  );
};

export default ChatApp;
