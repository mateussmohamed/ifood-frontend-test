import React from 'react';
import PropTypes from 'prop-types';

import CardImage from '../../atoms/CardImage';
import CardTitle from '../../atoms/CardTitle';
import CardSongs from '../../atoms/CardSongs';

import './Card.css';

const Card = (props) => {
  const { image, title, songs, action } = props
  return (
    <div className="card" role="presentation" onClick={action}>
      <CardImage src={image} title={title} />
        <CardTitle title={title} />
      <CardSongs songs={songs} />
    </div>
  )
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  songs: PropTypes.number.isRequired,
  action: PropTypes.func.isRequired,
};

export default Card;
