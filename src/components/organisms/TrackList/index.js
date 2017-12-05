import React from 'react';
import PropTypes from 'prop-types';
import TrackRow from '../../molecules/TrackRow';

import { getLabels } from '../../../utils';

import './TrackList.css';

const TrackList = ({ data }) => {
  const { items = [] } = data;
  if (!items.length) return (<section className="track-list-container" />);
  return (
    <section className="track-list-container">
      <ul className="track-list">
        {items.map((item) => {
          const labels = getLabels(item.track);
          return <TrackRow labels={labels} key={`track-${item.track.name}`} />;
        })}
      </ul>
    </section>
  );
};

TrackList.defaultProps = {
  data: {},
};

TrackList.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

export default TrackList;
