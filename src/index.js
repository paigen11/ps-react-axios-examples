import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

/* 
Default Global Configuration 
*/

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  request => {
    console.log(request);
    // Edit request config
    return request;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);
/* 
Interceptors: global error handlers
*/

axios.interceptors.response.use(
  response => {
    console.log(response);
    // Edit request config
    return response;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

// Global handler (e.g. log error on file sent to server)

// Forward error to local catch block to update UI informing user of error

// Edit response config

// Global handler (e.g. log error on file sent to server)
// Forward error to local catch block to update UI informing user of error

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
