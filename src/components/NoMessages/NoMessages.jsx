import PropTypes from 'prop-types';
import {ChatType} from '../../constants/constants.js';
import NoMessagesGroup from './NoMessagesGroup';
import NoMessagesMonet from './NoMessagesMonet';
import './NoMessages.css';

const NoMessages = ({selectedChat}) => {
  return (
    <div className="no-messages">
      {selectedChat === ChatType.GROUP ? <NoMessagesGroup/> : <NoMessagesMonet/>}
    </div>
  );
};

NoMessages.propTypes = {
  selectedChat: PropTypes.string.isRequired
}

export default NoMessages;
