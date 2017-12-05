import React from 'react';
import PropTypes from 'prop-types';

import './CardTitle.css';

const CardTitle = ({ title }) => <span className="card-title">{title}</span>;

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
