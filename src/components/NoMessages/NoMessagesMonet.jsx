import './NoMessages.css';

const NoMessagesMonet = () => {
  return (
    <div className="no-message-group">
      <div className="icon-container">
        <img src="../../../assets/monet-chat.png" alt="Group Chat Icon" className="icon"/>
      </div>
      <h2>MeetMonet: Your Personal Assistant</h2>
      <div className="info-box">
        <h3>Never miss a message</h3>
        <p>Review unread messages and team activity</p>
      </div>
      <div className="info-box">
        <h3>Plan your day</h3>
        <p>Prioritize daily tasks for productivity</p>
      </div>
      <div className="info-box gradient-border">
        <h3>Enhance Quotes with AI</h3>
        <p>Let Monet accelerate and improve your quote creation process</p>
      </div>
    </div>
  );
};

export default NoMessagesMonet;
