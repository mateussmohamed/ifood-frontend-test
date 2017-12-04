import React from 'react';
import PropTypes from 'prop-types';
import FilterTitle from '../../atoms/FilterTitle';
import FilterButton from '../../molecules/FilterButton';

import './FilterList.css';

const parseFilter = (id, value) => ({ [id]: value });

const component = (data, action) => (
  <section className="filter-list">
    <FilterTitle text={data.name} />
    <div className="filter-list-items">
      {data.values.map(item => (
        <FilterButton
          text={item.name}
          key={item.name}
          action={action(parseFilter(data.id, item.value))}
        />
      ))}
    </div>
  </section>
);

const FilterList = ({ data, action }) =>
  data && data.values ? component(data, action) : <div />;

FilterList.defaultProps = {
  data: {}
};

FilterList.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  action: PropTypes.func.isRequired
};

export default FilterList;
