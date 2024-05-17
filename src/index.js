import React from 'react';
import ReacDom from 'react-dom/client';
import './index.css';
import App from './Componentes/App';
import reportWebVitals from './reportWebVitals';

const Root = ReacDom.createRoot(document.getElementById('root'))
Root.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
);

reportWebVitals();
