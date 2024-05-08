import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRAting from './StarRAting';
// import './index.css';
// import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRAting maxRating={10} />
  </React.StrictMode>
);

