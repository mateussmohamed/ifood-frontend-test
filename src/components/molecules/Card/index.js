import React from 'react';
import PropTypes from 'prop-types';

import CardImage from '../../atoms/CardImage';
import CardTitle from '../../atoms/CardTitle';
import CardSongs from '../../atoms/CardSongs';

import './Card.css';

const Card = ({
  image,
  title,
  songs,
  action,
}) => (
  <div className="card">
    <CardImage src={image} title={title} />
    <a href="#!" role="button" onClick={action}>
      <CardTitle title={title} />
    </a>
    <CardSongs songs={songs} />
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  songs: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

export default Card;
