import PropTypes from 'prop-types';
import './BadgeNewMessage.css';

const BadgeNewMessage = ({count, onClose}) => {
  return (
    <div className="badge-new-message">
      {count} new messages <span className="close-icon" onClick={onClose}>&times;</span>
    </div>
  );
};

BadgeNewMessage.propTypes = {
  count: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired
}

export default BadgeNewMessage;
