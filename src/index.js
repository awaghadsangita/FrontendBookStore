import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// <<<<<<< HEAD
// import DashBoard from './component/dashboard/dashboard'
// import CustomerDetailsForm from './component/customerDetailsForm/customerDetailsform'
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<CustomerDetailsForm/>, document.getElementById('root'));
// =======
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// >>>>>>> eee98a283bb22bd015ca609c5610c1f82bb231b8

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
