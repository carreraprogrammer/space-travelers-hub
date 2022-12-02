
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import missionsSlice from '../Redux/Missions/MissionSlice';
import rocketReducer from './Rockets/RocketsSlice';

const spaceReducers = combineReducers({
  Missions: missionsSlice,
  Rockets: rocketReducer
});

const store = configureStore({
  reducer: spaceReducers,
});

export default store;
