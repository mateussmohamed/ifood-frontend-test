import React from 'react';
import renderer from 'react-test-renderer';
import TrackRow from './index';

it('Should TrackRow match to snapshot', () => {
  const labels = {
    title: 'Congratulations',
    artist: 'Post Malone',
    album: 'Stoney',
    duration: '3:40'
  };

  const component = <TrackRow labels={labels} />;
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});
