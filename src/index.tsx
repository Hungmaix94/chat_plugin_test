import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootEl = document.getElementById('root');


const render = () => ReactDOM.render(
  <App/>,
  rootEl
);

render();
reportWebVitals();
