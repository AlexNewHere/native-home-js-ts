import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {PromiseAdd} from './Promise/Promise';



ReactDOM.render(
  <React.StrictMode>
      <PromiseAdd/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
