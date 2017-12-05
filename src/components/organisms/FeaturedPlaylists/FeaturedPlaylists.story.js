import { storiesOf } from '@storybook/react';
import React from 'react';
import FeaturedPlaylists from './index';

const stories = storiesOf('FeaturedPlaylists', module);

const data = {
  message: 'As mais tocadas',
  playlists: {
    items: [
      {
        name: 'Bailando',
        tracks: { total: 60 },
        images: [
          {
            height: 300,
            url: 'https://i.scdn.co/image/723b3060add0aff0011fd2ae7d59237bbe788bb2',
            width: 300,
          },
        ],
      },
      {
        name: 'Esquenta Sertanejo',
        tracks: { total: 50 },
        images: [
          {
            height: 300,
            url: 'https://i.scdn.co/image/ac3e0fa062dbd40285b288fb7b17625dcd1948e1',
            width: 300,
          },
        ],
      },
      {
        name: 'Funk 25',
        tracks: { total: 25 },
        images: [
          {
            height: 300,
            url: 'https://i.scdn.co/image/f45205a65ddcca6ce2eef1cbc93c84fbc2503e72',
            width: 300,
          },
        ],
      },
    ],
  },
};

stories.add('default', () => <FeaturedPlaylists data={data} action={e => () => alert(e)} />);
