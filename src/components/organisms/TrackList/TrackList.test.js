import React from 'react';
import renderer from 'react-test-renderer';

import TrackList from './index';
import mockTracks from './mockTracks.json';

it('Should TrackList match to snapshot', () => {
  const funcTest = () => () => 'funcTest';
  const component = <TrackList data={mockTracks} action={funcTest} />;
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
