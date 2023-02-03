import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import manageNumber from './reducers/manageNumber';

const rootReducer = combineReducers({
  manageNumber,
});

const store = configureStore({reducer: rootReducer});

export default store;
