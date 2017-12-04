import { storiesOf } from '@storybook/react';
import React from 'react';
import TrackLabel from './index';

const stories = storiesOf('TrackLabel', module);
stories.add('whit text prop', () => (
  <div style={{ float: 'left' }}>
    <TrackLabel text="Borders" />
  </div>
));
