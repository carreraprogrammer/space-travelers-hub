
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from '../Redux/Missions/MissionSlice';

const spaceReducers = combineReducers({
  Missions: missionsSlice
});

const store = configureStore({
  reducer: spaceReducers,
});

export default store;
