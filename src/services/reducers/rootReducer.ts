import { combineReducers } from 'redux';
import { itemsReducer } from './reducer';

export const rootReducer = combineReducers({
    games: itemsReducer,
  });