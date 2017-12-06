import React from 'react';
import PropTypes from 'prop-types';

import Message from '../../atoms/Message';
import TrackRow from '../../molecules/TrackRow';
import { getLabels } from '../../../utils';
import './TrackList.css';

const TrackList = ({ data, action }) => {
  const { items = [] } = data;
  return (
    <section className="track-list-container">
    { items.length > 0 &&
      <div>
        <Message
          text="This songs is only for preview, they last a maximum of 30s"
        />
        <ul className="track-list">
        {
          items.filter(item => item.track.preview_url)
          .map(item =>
            <TrackRow
              labels={getLabels(item.track)}
              key={`track-row-${item.track.id}`}
              action={action(item.track.preview_url)}
            />
          )
        }
        </ul>
      </div>
    }
    </section>
  );
};

TrackList.defaultProps = {
  data: {},
};

TrackList.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  action: PropTypes.func.isRequired,
};

export default TrackList;
