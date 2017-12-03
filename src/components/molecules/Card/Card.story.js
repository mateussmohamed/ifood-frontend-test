import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from './index';

const stories = storiesOf('Card', module);

const props1 = {
  title: 'Bailando',
  image: 'https://i.scdn.co/image/723b3060add0aff0011fd2ae7d59237bbe788bb2',
  songs: 60
};

const props2 = {
  title: 'Esquenta Sertanejo',
  image: 'https://i.scdn.co/image/ac3e0fa062dbd40285b288fb7b17625dcd1948e1',
  songs: 50
};

const props3 = {
  title: 'Novidades da Semana',
  image: 'https://i.scdn.co/image/723b3060add0aff0011fd2ae7d59237bbe788bb2',
  songs: 50
};

stories.add('without props', () => (
  <div style={{ width: '100%' }}>
    <Card {...props1} />
    <Card {...props2} />
    <Card {...props3} />
  </div>
));
