import React from 'react';
import renderer from 'react-test-renderer';
import FeaturedPlaylists from './index';

it('Should FeaturedPlaylists match to snapshot', () => {
  const component = renderer.create(<FeaturedPlaylists data={{}} action={e => () => alert(e)} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
