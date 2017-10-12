import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from "./components/App"
import registerServiceWorker from './registerServiceWorker';

import dataFacade from "./dataFacade";

ReactDOM.render(<App facade={dataFacade}/>, document.getElementById('root'));

registerServiceWorker();

