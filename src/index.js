import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListContext from './components/studentApp2/ListContext'

ReactDOM.render(
  <React.StrictMode>
    <ListContext>
      <App />
    </ListContext>
  </React.StrictMode>,
  document.getElementById('root')
);

