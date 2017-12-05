import React from 'react';
import renderer from 'react-test-renderer';
import Message from './index';

describe('Message', () => {
  test('should Message match to snapshot', () => {
    const component = renderer.create(<Message text="awesome text" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should when text prop render the correct text', () => {
    const component = renderer.create(<Message text="awesome text" />);
    expect(component.toTree().props.text).toBe('awesome text');
  });

  test('should when type prop render the correct type', () => {
    const component = renderer.create(<Message type="error" />);
    expect(component.toTree().props.type).toBe('error');
  });
});
