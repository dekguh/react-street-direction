import React, { StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import 'leaflet/dist/leaflet.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);