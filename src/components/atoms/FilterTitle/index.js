import React from 'react';
import PropTypes from 'prop-types';
import './FilterTitle.css';

const FilterTitle = ({ text }) => <div className="filter-title">{text}</div>;

FilterTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default FilterTitle;
