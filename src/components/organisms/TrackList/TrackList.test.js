import React from 'react';
import renderer from 'react-test-renderer';

import TrackList from './index';
import mockTracks from './mockTracks.json';

it('Should TrackList match to snapshot', () => {
  const component = <TrackList data={mockTracks} />;
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
