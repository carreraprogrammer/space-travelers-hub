import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsReducer from './Missions/MissionSlice';

const spaceReducers = combineReducers({
  missions: missionsReducer,
});

const store = configureStore({
  reducer: spaceReducers,
});
export default store;
