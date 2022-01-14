import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from '../src/components/navbar/navbar'
import Footer from '../src/components/footer/footer'
import reportWebVitals from './reportWebVitals';
import Routage from '../src/components/route/routes'
import {BrowserRouter as Router, Link, Routes} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>    
        
      <Routage />   
      <Footer />  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
