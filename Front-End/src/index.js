import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from '../src/components/navbar/navbar'
import Footer from '../src/components/footer/footer'
import reportWebVitals from './reportWebVitals';
import Routage from './route/routes';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router, Link, Routes} from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>    
        
      <Routage />   
      <Footer />  
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
