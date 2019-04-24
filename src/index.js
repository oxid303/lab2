import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import store from './App/components/Redux/ReduxStore'

let rerender = () => {
  ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch} />,
    document.getElementById('root'));
};

rerender();

store.subscribe(() => {
  rerender();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
