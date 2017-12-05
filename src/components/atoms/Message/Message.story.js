import { storiesOf } from '@storybook/react';
import React from 'react';
import Message from './index';

const stories = storiesOf('Message', module);

stories.add('whit text prop', () => (
  <div style={{ float: 'left' }}>
    <Message text="Dormindo e cantando :)" />
  </div>
)).add('whit text and type prop', () => (
  <div style={{ float: 'left' }}>
    <Message text="Unlaunched country" type="error" />
    <Message text="Select Filter to load featured playlists =)" type="info" />
  </div>
));
