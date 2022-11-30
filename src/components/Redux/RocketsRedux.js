import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk(
  'rocketSlice/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets').then(
      (data) => data.json()
    );
    const rocketApiInfo = response.map((rocket) => {
      const rockets = {
        id: rocket.rocket_id,
        rocketName: rocket.rocket_name,
        description: rocket.description,
        flickrImages: rocket.flickr_images,
        reserved: false,
      };
      return rockets;
    });
    return rocketApiInfo;
  }
);

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: '',
    loading: true,
  },
  reducers: {
    reserveRocket(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rockets: newState };
    },

    cancelReservation(state, action) {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, rockets: newState };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      const newState = state;
      newState.rockets = action.payload;
    });
  },
});
export const { reserveRocket, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
