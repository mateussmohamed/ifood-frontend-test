import React from 'react';
import PropTypes from 'prop-types';
import TrackRow from '../../molecules/TrackRow';

import { getLabels } from '../../../utils';

import './TrackList.css';

const TrackList = ({ data }) => {
  const { items = [] } = data;
  return (
    <section className="track-list-container">
      { items.length > 0 &&
        <ul className="track-list">
        {
          items.map(item =>
            <TrackRow
              labels={getLabels(item.track)}
              key={`track-${item.track.name}`}
            />
          )
        }
      </ul>
    }
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
