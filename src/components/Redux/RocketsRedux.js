import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rocketSlice/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets').then(
      (rocket) => rocket.json()
    );
    const rockets = response.map((rocket) => {
      const rockets = {
        id: rocket.rocket_id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        flickrImages: rocket.flickr_images,
        reserved: false,
      };
      return rockets;
    });
    return rockets;
  }
);

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
    loading: true,
    status: '',
  },
  reducers: {
    joinMission(state, { payload }) {
      const newRockets = [];
      state.rockets.map((rocket) => {
        if (rocket.rocket_id === payload) {
          newRockets.push({
            ...rocket,
            reserved: !rocket.reserved,
          });
        } else {
          newRockets.push(rocket);
        }
        return newRockets;
      });
      return { ...state, rockets: newRockets };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});
export const { joinMission } = rocketsSlice.actions;
export default rocketsSlice.reducer;
