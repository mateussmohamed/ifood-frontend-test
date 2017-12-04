import { storiesOf } from '@storybook/react';
import React from 'react';

import TrackRow from './index';

const stories = storiesOf('TrackRow', module);

const labels = {
  title: 'Congratulations',
  artist: 'Post Malone',
  album: 'Stoney',
  duration: '3:40'
};

stories.add('default', () => (
  <section>
    <TrackRow labels={labels} />
  </section>
));
