import { createSlice } from '@reduxjs/toolkit';

export const gameContextSlice = createSlice({
  name: 'context',

  initialState: {
    showQr: false,
    showDiscoverAnimation: false,
    tentatives: [],
    animate: 'move',
    tentative: {}
  },
  reducers: {
    setAnimation: (state, action) => {
      state.showDiscoverAnimation = action.payload;
    },
    setTentatives: (state, action) => {
      state.tentatives = action.payload;
    },
    setTentative: (state, action) => {
      state.tentative = action.payload;
    },
    setAnimate: (state, action) => {
      state.animate = action.payload;
    },
    setShowQr: (state, action) => {
      state.showQr = action.payload;
    }
  }
});

export const { setShowQr, setAnimate, setTentative, setAnimation, setTentatives } = gameContextSlice.actions;
export default gameContextSlice.reducer;
