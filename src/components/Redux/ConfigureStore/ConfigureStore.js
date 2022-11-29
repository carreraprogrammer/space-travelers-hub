import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketReducer from '../RocketsRedux';

const spaceReducers = combineReducers({
  Rockets: rocketReducer,
});

const store = configureStore({
  reducer: spaceReducers,
});
export default store;
