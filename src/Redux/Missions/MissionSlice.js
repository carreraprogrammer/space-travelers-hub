import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'Missions/getMissions', // Name of the action
  async () => {
    const missions = await fetch('https://api.spacexdata.com/v3/missions'); // bring the missions form API
    const data = await missions.json(); //Change the format to json
    return data
  }
)

