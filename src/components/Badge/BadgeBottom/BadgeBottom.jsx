import './BadgeBottom.css';

const BadgeBottom = ({onClick}) => {
  return (
    <div className="badge-bottom" onClick={onClick}>
      <i className="fa fa-arrow-down"></i>
    </div>
  );
};

export default BadgeBottom;
