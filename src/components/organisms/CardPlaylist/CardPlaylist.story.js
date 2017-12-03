import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import CardPlaylist from './index';
import Card from '../../molecules/Card';

const stories = storiesOf('CardPlaylist', module);

const data = [
  {
    title: 'Bailando',
    image: 'https://i.scdn.co/image/723b3060add0aff0011fd2ae7d59237bbe788bb2',
    songs: 60
  },
  {
    title: 'Esquenta Sertanejo',
    image: 'https://i.scdn.co/image/ac3e0fa062dbd40285b288fb7b17625dcd1948e1',
    songs: 50
  },
  {
    title: 'Funk 25',
    image: 'https://i.scdn.co/image/f45205a65ddcca6ce2eef1cbc93c84fbc2503e72',
    songs: 25
  }
];

stories.add('without props', () => <CardPlaylist data={data} />);
