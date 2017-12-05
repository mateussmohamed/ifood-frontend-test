import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = ({ text, type }) => (
  <div className={`message ${type}`}>{text}</div>
);

Message.defaultProps = {
  text: 'Select filter for show playlists.',
  type: 'info',
};

Message.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

export default Message;
