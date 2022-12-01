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
          reserved: false
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
     reducers: {
        joinMission(state, { payload }) {
          const newMissions = [];
          state.data.map((mission) => {
            if (mission.mission_id === payload) {
              newMissions.push({
                ...mission,
                reserved: !mission.reserved,
              });
            } else {
              newMissions.push(mission);
            }
            return newMissions;
          });
          return { ...state, data: newMissions };
        },
      },
     extraReducers: (Builder) => {
        Builder.addCase(getMissions.fulfilled, (state, action) => {
            state.data = action.payload;
        })
        .addCase(getMissions.pending, (state) => {
            const newState = { ...state, loading: true };
            return newState;
          })
        .addCase(getMissions.rejected, (state) => {
            const newState = { ...state, error: 'Error 404. Failed to fetch' };
            return newState;
          });
     }
 }
)

export default missionsSlice.reducer
export const { joinMission } = missionsSlice.actions;