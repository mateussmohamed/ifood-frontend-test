import React from 'react';
import PropTypes from 'prop-types';
import TrackRow from '../../molecules/TrackRow';

import './TrackList.css';

const convertToHumanTime = duration => {
  let s = parseInt((duration / 1000) % 60, 10);
  const m = parseInt((duration / (1000 * 60)) % 60, 10);
  s = s < 10 ? `0${s}` : s;
  return `${m}:${s}`;
};

const getLabels = track => {
  return {
    title: track.name,
    artist: track.artists.map(art => art.name).join(','),
    album: track.album.name,
    duration: convertToHumanTime(track.duration_ms)
  };
};

const TrackList = ({ data }) => (
  <section className="track-list-container">
    <h2 className="track-list-title">
      Daily playlist (created for you, by us)
    </h2>
    <ul className="track-list">
      {data.items.map(item => {
        const labels = getLabels(item.track);
        return <TrackRow labels={labels} key={`track-${item.track.name}`} />;
      })}
    </ul>
  </section>
);

TrackList.defaultProps = {
  data: {}
};

TrackList.propTypes = {
  data: PropTypes.objectOf(PropTypes.any)
};

export default TrackList;
