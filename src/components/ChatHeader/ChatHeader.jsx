import './ChatHeader.css';

const ChatHeader = ({toggleMinimize, title, toggleParticipants}) => {
  return (
    <div className="chat-header">
      <span className="chat-title">{title}</span>
      <div className="chat-icons">
        <i className="fa fa-search"></i>
        <i className="fa fa-users" onClick={toggleParticipants}></i>
        <i className="fa fa-align-center"></i>
        <i className="fa fa-window-minimize" onClick={toggleMinimize}></i>
        <i className="fa fa-times"></i>
      </div>
    </div>
  );
};

export default ChatHeader;
