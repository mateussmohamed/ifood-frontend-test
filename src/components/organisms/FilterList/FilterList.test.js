import React from 'react';
import renderer from 'react-test-renderer';
import FilterList from './index';
import countryFilters from './mockFilters';

it('Should FilterList match to snapshot', () => {
  const component = (
    <FilterList
      data={countryFilters}
      title="awesome playlist"
      action={e => e}
    />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
