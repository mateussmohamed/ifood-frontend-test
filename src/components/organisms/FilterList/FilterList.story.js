import { storiesOf } from '@storybook/react';
import React from 'react';
import FilterList from './index';
import mockFilters from './mockFilters';

const stories = storiesOf('FilterList', module);

stories.add('default', () => (
  <section>
    <FilterList data={mockFilters} action={e => () => alert(e)} />
  </section>
));
