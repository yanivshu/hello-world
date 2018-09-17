import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

//const store = createStore(reducer);


const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension() );


    window.devToolsExtension ? window.devToolsExtension() : f => f

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

