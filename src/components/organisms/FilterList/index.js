import React from 'react';
import PropTypes from 'prop-types';
import FilterTitle from '../../atoms/FilterTitle';
import FilterButton from '../../molecules/FilterButton';

import { parseFilter } from '../../../utils';

import './FilterList.css';

const isActive = (actives, filter, val) => (actives !== undefined && val !== undefined) && actives[filter] === val;

const FilterList = ({ data, action, actives }) => (
  data.map(filter => filter.values &&
    (
      <section className="filter-list" key={filter.name} >
        <FilterTitle text={filter.name} />
        <div className="filter-list-items">
          {
            filter.values.map((val) => (
              <FilterButton
                key={val.name}
                text={val.name}
                active={isActive(actives, filter.id, val.value) || false}
                action={action(parseFilter(filter.id, val.value))}
              />
            ))
          }
        </div>
      </section>
    )
  )
);


FilterList.defaultProps = {
  data: [],
};

FilterList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  action: PropTypes.func.isRequired,
  actives: PropTypes.objectOf(PropTypes.any)
};

export default FilterList;
