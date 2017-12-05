import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../molecules/Card';
import Message from '../../atoms/Message';

import './FeaturedPlaylists.css';

const renderFeaturedPlaylists = (data, action) => (
  <div className="featured-playlists-cards">
    {data.map(item => (
      <Card
        key={item.id}
        title={item.name}
        image={item.images[0].url}
        songs={item.tracks.total}
        action={action(item.tracks.href)}
      />
    ))}
  </div>
);

const FeaturedPlaylists = ({ data, action }) => {
  const { playlists = {}, error = {}, message } = data;
  const msg = error.message || message;
  const type = error.message ? 'error' : 'info';
  return (
    <section className="featured-playlists">
      <div className="featured-playlists-message">
        <Message text={msg} type={type} />
      </div>
      {playlists.items && renderFeaturedPlaylists(playlists.items, action)}
    </section>
  );
};

FeaturedPlaylists.defaultProps = {
  data: [],
};

FeaturedPlaylists.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  action: PropTypes.func.isRequired,
};

export default FeaturedPlaylists;
