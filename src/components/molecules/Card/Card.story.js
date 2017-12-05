import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from './index';

const stories = storiesOf('Card', module);

const props = {
  title: 'Bailando',
  image: 'https://i.scdn.co/image/723b3060add0aff0011fd2ae7d59237bbe788bb2',
  songs: 60,
};
stories.add('without props', () => (
  <div style={{ width: '100%' }}>
    <Card {...props} />
  </div>
));
