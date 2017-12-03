import React from 'react';
import PropTypes from 'prop-types';

import './CardSongs.css';

const CardSongs = ({ songs }) => (
  <span className="card-song">{songs} Songs</span>
);

CardSongs.propTypes = {
  songs: PropTypes.number.isRequired
};

export default CardSongs;
