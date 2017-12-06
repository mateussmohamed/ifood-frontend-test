import React from 'react';
import PropTypes from 'prop-types';
import './FilterButton.css';

import FilterTitle from '../../atoms/FilterTitle';

const FilterButton = ({ text, action, active }) => (
  <button className={`filter-button ${active ? 'active' : ''}`} onClick={action}>
    <FilterTitle text={text} />
  </button>
);

FilterButton.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default FilterButton;
