import React from 'react';
import PropTypes from 'prop-types';
import TrackLabel from '../../atoms/TrackLabel';
import './TrackRow.css';

const TrackRow = ({ labels }) => (
  <li className="track-row">
    {Object.keys(labels).map(key => (
      <TrackLabel type={key} text={labels[key]} key={`track-label-${key}`} />
    ))}
  </li>
);

TrackRow.defaultProps = {
  labels: {},
};

TrackRow.propTypes = {
  labels: PropTypes.objectOf(PropTypes.any),
};

export default TrackRow;
