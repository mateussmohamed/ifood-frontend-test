import React from 'react';
import PropTypes from 'prop-types';
import './TrackLabel.css';

const TrackLabel = ({ text, type }) => (
  <span className={`track-label ${type}`}>{text}</span>
);

TrackLabel.defaultProps = {
  type: '',
};

TrackLabel.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TrackLabel;
