import { storiesOf } from '@storybook/react';
import React from 'react';

import TrackList from './index';
import mockTracks from './mockTracks.json';

const stories = storiesOf('TrackList', module);

stories.add('default', () => (
  <section>
    <TrackList data={mockTracks} />
  </section>
));
