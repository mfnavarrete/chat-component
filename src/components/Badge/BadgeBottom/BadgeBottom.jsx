import './BadgeBottom.css';
import PropTypes from 'prop-types';

const BadgeBottom = ({onClick}) => {
  return (
    <div className="badge-bottom" onClick={onClick}>
      <i className="fa fa-arrow-down"></i>
    </div>
  );
};

BadgeBottom.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default BadgeBottom;
