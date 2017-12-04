import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './config/registerServiceWorker';
import App from './components/App';

ReactDOM.render(<App />, document.querySelector('[data-js-app="spotifood"]'));

registerServiceWorker();
