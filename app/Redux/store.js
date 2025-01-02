import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'
import apiMiddleware from './middlewares/apiMiddleware'; // Chemin correct
import rootReducer from './reducers/rootReducer'; // Combine tous les reducers

// Configuration des middlewares
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, apiMiddleware) // Ajout des middlewares
);

export default store;
