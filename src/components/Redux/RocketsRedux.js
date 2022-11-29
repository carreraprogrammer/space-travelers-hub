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
        flickrImages: rocket.flickr_images,
        rocketName: rocket.rocket_name,
        description: rocket.description,
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
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.rockets = action.payload;
    });
  },
});
export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
