import React from 'react';
import renderer from 'react-test-renderer';
import Card from './index';

test('Should Card match to snapshot', () => {
  const props = {
    title: 'Bailando',
    image: 'https://i.scdn.co/image/723b3060add0aff0011fd2ae7d59237bbe788bb2',
    songs: 234
  };
  const component = renderer.create(<Card {...props} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
