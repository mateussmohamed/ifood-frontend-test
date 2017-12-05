import React from 'react';
import renderer from 'react-test-renderer';
import FilterList from './index';
import mockFilters from './mockFilters';

it('Should FilterList match to snapshot', () => {
  const component = (
    <FilterList
      data={mockFilters}
      action={e => () => console.log(e)}
    />
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
