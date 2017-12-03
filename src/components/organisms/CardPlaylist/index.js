import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../molecules/Card';

import './CardPlaylist.css';

const CardPlaylist = ({ data }) => (
  <section className="card-playlist">
    {data.map(item => (
      <Card
        key={item.id}
        title={item.name}
        image={item.images[0].url}
        songs={item.tracks.total}
      />
    ))}
  </section>
);

CardPlaylist.defaultProps = {
  data: []
};

CardPlaylist.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object)
};

export default CardPlaylist;
