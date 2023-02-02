import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Overlaying from './components/Overlaying';

ReactDOM.render(
  <React.StrictMode>
      <>
    <App /> 
  
    {/* <Overlaying/> */}
    </>
</React.StrictMode>,
  document.getElementById('root')
);
