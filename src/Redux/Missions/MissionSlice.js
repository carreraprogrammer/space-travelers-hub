import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissions = createAsyncThunk(
  'Missions/getMissions', // Name of the action
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions')
    .then((data) => data.json())

    const missionApiInfo = response.map((mission) => {
        const missions = {
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
        };
        return missions;
      }      
    )
    return missionApiInfo
  }
)

const initialState = { loading: false, data: [], error: null };

const missionsSlice = createSlice(
 {
     name: 'missions',
     initialState,
     reducers: {},
     extraReducers: (Builder) => {
        Builder.addCase(getMissions.fulfilled, (state, action) => {
            state.data = action.payload;
        })
     }
 }
)

export default missionsSlice.reducer