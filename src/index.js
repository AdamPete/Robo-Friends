import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import { robot } from './robot';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card
        id={robot[0].id}
        name={robot[0].name}
        email={robot[0].email}
        username={robot[0].username}
      />
      <Card
        id={robot[1].id}
        name={robot[1].name}
        email={robot[1].email}
        username={robot[1].username}
      />
      <Card
        id={robot[2].id}
        name={robot[2].name}
        email={robot[2].email}
        username={robot[2].username}
      />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
