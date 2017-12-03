import React from 'react';
import renderer from 'react-test-renderer';
import CardPlaylist from './index';

it('Should CardPlaylist match to snapshot', () => {
  const component = renderer.create(
    <CardPlaylist data={[]}>Título</CardPlaylist>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
