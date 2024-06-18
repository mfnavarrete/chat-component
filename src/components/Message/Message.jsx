import './Message.css';
import {Author, MessageType} from '../../constants/constants.js';

const Message = ({message, stopRequest, isTyping}) => {
  const messageClass = message.type === MessageType.SENT ? 'message-sent' : 'message-received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={message.avatar} alt={`${message.author} avatar`} className="message-avatar"/>
      <div className="message-content">
        <div className="message-header">
          <span className="message-author">{message.author}</span>
          <span className="message-time"> | </span>
          <span className="message-time"> {message.time} </span>
        </div>
        <div className="message-text">{message.text}</div>
        {isTyping && message.author === Author.MONET && (
          <button className="stop-button" onClick={stopRequest}>
            <i className="fa fa-stop"> Stop</i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;
