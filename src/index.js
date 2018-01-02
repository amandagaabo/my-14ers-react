import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App'
import './styles.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
