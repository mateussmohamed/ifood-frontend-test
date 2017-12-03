import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<App />, document.querySelector('[data-js-app="spotifood"]'));

registerServiceWorker();
