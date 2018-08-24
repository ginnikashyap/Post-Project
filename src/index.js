import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
//Adding the some default configuration and we can also split it into a new axios instance which will overwrite this global configuration.

axios.defaults.baseURL='https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']='AUTH TOKEN';
axios.defaults.headers.post['Content-Type']='application/json';

axios.interceptors.request.use(
    request=>{
        console.log(request);
        return request;
    },error =>{
        console.log(error);
        return Promise.reject(error);
    }
)


axios.interceptors.response.use(
    response=>{
        console.log(response);
        return response;
    },error =>{
        console.log(error);
        return Promise.reject(error);
    }
)


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
