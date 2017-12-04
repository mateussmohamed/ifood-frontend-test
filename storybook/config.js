import { configure } from '@storybook/react';

import 'normalize.css';
import '../src/components/App.css';

const req = require.context('../src/components', true, /\.story\.js$/);


function loadStories() {
  req.keys().sort((a, b) => b - a).forEach(filename => req(filename));
}

configure(loadStories, module);
