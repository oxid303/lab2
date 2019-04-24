import {createStore, combineReducers} from 'redux';
import counterReducer from './CounterReducer';

let reducers = combineReducers({
  counterReducer: counterReducer
});

let store = createStore(reducers);

export default store;
