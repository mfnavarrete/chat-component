import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from 'react';
import BadgeBottom from '../Badge/BadgeBottom/BadgeBottom.jsx';
import BadgeNewMessage from '../Badge/BadgeNewMessage/BadgeNewMessage.jsx';
import Message from '../Message/Message';
import './MessageList.css';
import NoMessages from '../NoMessages/NoMessages';
import TypingIndicator from '../TypingIndicator/TypingIndicator';

const MessageList = ({
                       messages,
                       newMessagesCount,
                       showNewMessageBadge,
                       onCloseBadge,
                       stopRequest,
                       isTyping,
                       selectedChat,
                     }) => {
  const messageListRef = useRef(null);
  const [showBadgeBottom, setShowBadgeBottom] = useState(false);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const handleScroll = () => {
    if (messageListRef.current) {
      const {scrollTop, scrollHeight, clientHeight} = messageListRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 50;
      const isScrolledPastThreshold = scrollHeight - scrollTop - clientHeight > 150;
      setShowBadgeBottom(!isScrolledToBottom && isScrolledPastThreshold);
    }
  };

  const handleScrollToEnd = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
      setShowBadgeBottom(false);
    }
  };

  return (
    <>
      {messages.length === 0 ? (
        <NoMessages selectedChat={selectedChat}/>
      ) : (
        <>
          {newMessagesCount > 0 && showNewMessageBadge && (
            <BadgeNewMessage count={newMessagesCount} onClose={onCloseBadge}/>
          )}
          <div className="message-list" ref={messageListRef} onScroll={handleScroll}>
            {messages.map((message, index) => (
              <Message
                key={message.id}
                message={message}
                isTyping={isTyping && index === messages.length - 1}
                stopRequest={index === messages.length - 1 ? stopRequest : null}
              />
            ))}
            {isTyping && <TypingIndicator/>}
          </div>
          {showBadgeBottom && <BadgeBottom onClick={handleScrollToEnd}/>}
        </>
      )}
    </>
  );
};

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
  newMessagesCount: PropTypes.number.isRequired,
  showNewMessageBadge: PropTypes.bool.isRequired,
  onCloseBadge: PropTypes.func.isRequired,
  stopRequest: PropTypes.func.isRequired,
  isTyping: PropTypes.bool.isRequired,
  selectedChat: PropTypes.string.isRequired,
};


export default MessageList;
