import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import reportWebVitals from './reportWebVitals';
import { Item } from '../src/market/Item.jsx';
import {Inventory }from '../src/market/Inventory.jsx'

let Market = new Inventory()

const stores = {
  Market
}

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
