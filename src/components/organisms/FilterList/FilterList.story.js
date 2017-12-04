import { storiesOf } from '@storybook/react';
import React from 'react';
import FilterList from './index';
import { localeFilters, countryFilters } from './mockFilters';

const stories = storiesOf('FilterList', module);

stories.add('default', () => (
  <section>
    <FilterList data={localeFilters} action={e => () => alert(e)} />
    <FilterList data={countryFilters} action={e => () => alert(e)} />
  </section>
));
