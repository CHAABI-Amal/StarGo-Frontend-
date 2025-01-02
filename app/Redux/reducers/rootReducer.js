import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer, // Pour la gestion d'authentification
});

export default rootReducer;
