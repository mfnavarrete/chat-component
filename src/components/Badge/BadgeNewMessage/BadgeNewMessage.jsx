import './BadgeNewMessage.css';

const BadgeNewMessage = ({count, onClose}) => {
  return (
    <div className="badge-new-message">
      {count} new messages <span className="close-icon" onClick={onClose}>&times;</span>
    </div>
  );
};

export default BadgeNewMessage;
