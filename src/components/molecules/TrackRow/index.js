import React from 'react';
import PropTypes from 'prop-types';
import TrackLabel from '../../atoms/TrackLabel';
import './TrackRow.css';

const TrackRow = ({ labels, action }) => (
  <li className="track-row" onClick={action}>
    <button className="play-button"></button>
    {Object.keys(labels).map(key => (
      <TrackLabel
        type={key}
        text={labels[key]}
        key={`track-label-${key}`}
      />
    ))}
  </li>
);

TrackRow.defaultProps = {
  labels: {},
};

TrackRow.propTypes = {
  labels: PropTypes.objectOf(PropTypes.any),
  action: PropTypes.func.isRequired,
};

export default TrackRow;
