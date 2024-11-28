import ReactDOM from 'react-dom';
import React from 'react';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <PorscheDesignSystemProvider>
      <App />
    </PorscheDesignSystemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);