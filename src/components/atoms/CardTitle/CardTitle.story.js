import { storiesOf } from '@storybook/react';
import React from 'react';
import CardTitle from './index';

const stories = storiesOf('CardTitle', module);

stories.add('with title prop', () => (
  <div style={{ backgroundColor: '#000' }}>
    <CardTitle title="Galactic vibes" />
  </div>
));
