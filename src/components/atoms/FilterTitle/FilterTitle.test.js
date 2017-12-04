import React from 'react';
import renderer from 'react-test-renderer';
import FilterTitle from './index';

describe('FilterTitle', () => {
  test('should FilterTitle match to snapshot', () => {
    const component = renderer.create(<FilterTitle text="awesome text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should when text prop render the correct text', () => {
    const component = renderer.create(<FilterTitle text="awesome text" />);
    expect(component.toTree().props.text).toBe('awesome text');
  });
});
