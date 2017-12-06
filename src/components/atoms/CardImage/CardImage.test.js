import React from 'react';
import renderer from 'react-test-renderer';
import CardImage from './index';

describe('CardImage', () => {
  test('should CardImage match to snapshot', () => {
    const imageURL = 'http://via.placeholder.com/400x400';
    const component = renderer.create(<CardImage src={imageURL} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should width default prop equal 300', () => {
    const imageURL = 'http://via.placeholder.com/350x300';
    const component = renderer.create(<CardImage src={imageURL} />);
    expect(component.toTree().props.width).toBe(250);
  });
});
