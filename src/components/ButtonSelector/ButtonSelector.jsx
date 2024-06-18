import './ButtonSelector.css';
import {ChatType} from '../../constants/constants.js';

const ButtonSelector = ({selectedChat, setSelectedChat}) => {
  return (
    <div className="button-selector">
      <button
        className={`chat-button ${selectedChat === ChatType.GROUP ? 'selected' : ''}`}
        onClick={() => setSelectedChat(ChatType.GROUP)}
      >
        Group Chat
      </button>
      <button
        className={`chat-button ${selectedChat === ChatType.MONET ? 'selected' : ''}`}
        onClick={() => setSelectedChat(ChatType.MONET)}
      >
        Monet AI
      </button>
    </div>
  );
};

export default ButtonSelector;
