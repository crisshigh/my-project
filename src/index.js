import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  // React.createElement("ul", null,
  // React.createElement("li", null, "Monday"),
  // React.createElement("li", null, "Tuesday"),
  // React.createElement("li", null, "Wendesday"),
  // React.createElement("li", null, "Thursday"),
  // React.createElement("li", null, "Friday"),
  // React.createElement("li", null, "Saturday"),
  // )
  // <ul>
  //   <li>hi</li>
  //   <li>tek</li>
  //   <li>man</li>
  //   <li>kac</li>
  // </ul>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();