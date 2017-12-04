import React from 'react';
import renderer from 'react-test-renderer';
import FilterButton from './index';

describe('FilterButton', () => {
  test('should FilterButton match to snapshot', () => {
    const component = (
      <FilterButton text="awesome filter button" action={e => e} />
    );
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
