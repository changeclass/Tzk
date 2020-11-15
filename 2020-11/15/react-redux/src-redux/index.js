import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import store from './redux/store'
function init () {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
}

init()
store.subscribe(function () {
  init()
})