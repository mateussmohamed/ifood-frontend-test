import { storiesOf } from '@storybook/react';
import React from 'react';
import CardSongs from './index';

const stories = storiesOf('CardSongs', module);

stories.add('with song props', () => <CardSongs songs="18" />);
