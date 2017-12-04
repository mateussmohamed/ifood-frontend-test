import { storiesOf } from '@storybook/react';
import React from 'react';
import FilterButton from './index';

const stories = storiesOf('FilterButton', module);

stories.add('whit text prop', () => (
  <div style={{ float: 'left' }}>
    <FilterButton text="Brasil" />
    <FilterButton text="México" />
    <FilterButton text="Argentina" />
    <FilterButton text="Colômbia" />
  </div>
));
