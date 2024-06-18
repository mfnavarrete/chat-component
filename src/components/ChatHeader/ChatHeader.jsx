import PropTypes from 'prop-types';
import './ChatHeader.css';

const ChatHeader = ({toggleMinimize, title}) => {
  return (
    <div className="chat-header">
      <span className="chat-title">{title}</span>
      <div className="chat-icons">
        <i className="fa fa-search"></i>
        <i className="fa fa-users"></i>
        <i className="fa fa-align-center"></i>
        <i className="fa fa-window-minimize" onClick={toggleMinimize}></i>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

ChatHeader.propTypes = {
  toggleMinimize: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ChatHeader;
