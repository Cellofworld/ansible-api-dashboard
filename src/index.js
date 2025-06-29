import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
 
import { Provider } from 'react-redux';
import { store } from './store/Store';
import ScrollToTop from './routes/ScrollToTop';
import Routing from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />

        <Routing /> 

    </BrowserRouter>
</React.StrictMode>
);