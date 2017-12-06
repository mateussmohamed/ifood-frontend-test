import React from 'react';
import PropTypes from 'prop-types';
import './CardImage.css';

const CardImage = ({ src, title, width }) => (
  <img
    className="card-image"
    src={src}
    alt={title}
    title={title}
    width={width}
  />
);

CardImage.defaultProps = {
  title: '',
  width: 250,
};

CardImage.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
};

export default CardImage;
