import React from 'react';
import PropTypes from 'prop-types';
import './FilterButton.css';

import FilterTitle from '../../atoms/FilterTitle';

const FilterButton = ({ text, action }) => (
  <button className="filter-button" onClick={action}>
    <FilterTitle text={text} />
  </button>
);

FilterButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default FilterButton;
