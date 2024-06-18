import './NoMessages.css';
import groupIcon from '../../../assets/group-chat.png';

const NoMessagesGroup = () => {
  return (
    <div className="no-message-group">
      <div className="icon-container">
        <img src={groupIcon} alt="Group Chat Icon" className="icon"/>
      </div>
      <h2>Introducing Group Chat</h2>
      <div className="info-box">
        <h3>Collaborate with Your Team</h3>
        <p>Ask questions and track team updates</p>
      </div>
      <div className="info-box">
        <h3>Discuss Quote Items</h3>
        <p>Start a thread on items in your quote list</p>
      </div>
      <div className="info-box gradient-border">
        <h3>Enhance Productivity with Monet AI</h3>
        <p>Leverage Monet to help manage tasks and streamline quote creation</p>
      </div>
    </div>
  );
};

export default NoMessagesGroup;
