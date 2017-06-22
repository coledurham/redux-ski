import C from './constants.js';
import appReducer from './store/reducers';
import initialState from './initialState.json';
import { createStore } from 'redux';

const store = createStore(appReducer);

console.log('initial state :: ', store.getState());
