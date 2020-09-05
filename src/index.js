import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="bg">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
