import './myStyles.css';
import PropTypes from 'prop-types';

const ConvoItem = ({ name, lastMessage, timeStamp }) => {
  return (
    <div className='convo-container'>
        <p className='convo-icon'>{name[0]}</p>
        <p className='convo-title'>{name}</p>
        <p className='convo-lastMessage'>{lastMessage}</p>
        <p className='convo-timeStamp'>{timeStamp}</p>

    </div>
  )
}

ConvoItem.propTypes = {
    name: PropTypes.string.isRequired,
    lastMessage: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired

};

export default ConvoItem;
