import { storiesOf } from '@storybook/react';
import React from 'react';
import FilterTitle from './index';

const stories = storiesOf('FilterTitle', module);
stories.add('whit text prop', () => (
  <div style={{ float: 'left' }}>
    <FilterTitle text="Filtrar por" />
  </div>
));
