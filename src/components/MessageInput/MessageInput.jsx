import PropTypes from 'prop-types';
import {useState} from 'react';
import './MessageInput.css';

const MessageInput = ({onSendMessage}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="message-input-container">
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSend();
        }}
      />
      <button className="send-button" onClick={handleSend}>
        <img src="/send-icon.png" alt="Send" className="send-icon"/>
      </button>
    </div>
  );
};

MessageInput.propTypes = {
  onSendMessage: PropTypes.func.isRequired
}

export default MessageInput;
