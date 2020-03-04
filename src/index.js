import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './store/reducers'

import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(reducer);

// Create provider and pass in store prop for entire APP.
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}><App /></Provider>, rootElement);
