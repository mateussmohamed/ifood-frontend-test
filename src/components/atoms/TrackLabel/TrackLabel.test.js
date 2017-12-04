import React from 'react';
import renderer from 'react-test-renderer';
import TrackLabel from './index';

describe('TrackLabel', () => {
  test('should TrackLabel match to snapshot', () => {
    const component = renderer.create(<TrackLabel text="awesome text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should when text prop render the correct text', () => {
    const component = renderer.create(<TrackLabel text="awesome text" />);
    expect(component.toTree().props.text).toBe('awesome text');
  });
});
