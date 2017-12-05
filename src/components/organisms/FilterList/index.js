import React from 'react';
import PropTypes from 'prop-types';
import FilterTitle from '../../atoms/FilterTitle';
import FilterButton from '../../molecules/FilterButton';

import { parseFilter } from '../../../utils';

import './FilterList.css';

const renderFilters = (filter, action) => (
  <section className="filter-list" key={filter.name}>
    <FilterTitle text={filter.name} />
    <div className="filter-list-items">
      {filter.values.map(val => (
        <FilterButton
          key={val.name}
          text={val.name}
          action={action(parseFilter(filter.id, val.value))}
        />
      ))}
    </div>
  </section>
);

const FilterList = ({ data, action }) => (
  data.map(filter => filter.values && renderFilters(filter, action))
);

FilterList.defaultProps = {
  data: [],
};

FilterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func.isRequired,
};

export default FilterList;
