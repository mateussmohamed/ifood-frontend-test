import { storiesOf } from '@storybook/react';
import React from 'react';
import FilterButton from './index';

const stories = storiesOf('FilterButton', module);

stories.add('whit text prop', () => (
  <div style={{ float: 'left' }}>
    <FilterButton text="Brasil" action={e => console.log('Brasil', e)} />
    <FilterButton text="México" action={e => console.log('México', e)} />
    <FilterButton text="Argentina" action={e => console.log('Argentina', e)} />
    <FilterButton text="Colômbia" action={e => console.log('Colômbia', e)} />
  </div>
));
