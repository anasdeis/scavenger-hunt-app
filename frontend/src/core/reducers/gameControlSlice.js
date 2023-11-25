import { createSlice } from '@reduxjs/toolkit';

export const gameControlSlice = createSlice({
  name: 'dateEnd',
  initialState: {
    play: true,
    endGame: false,
    endDate: undefined,
    hit: false,
    miss: false
  },
  reducers: {
    setPlay: (state, action) => {
      state.play = action.payload;
    },
    setPartyEnded: (state, action) => {
      state.endGame = action.payload;
    },
    setDateEnd: (state, action) => {
      state.endDate = action.payload;
    },
    setHit: (state, action) => {
      state.hit = action.payload;
    },
    setMiss: (state, action) => {
      state.miss = action.payload;
    },
    setTemptUser: (state, action) => {
      state.temptUser = action.payload;
    },
    setAttemptPicture: (state, action) => {
      state.atemptPicture = action.payload;
    }
  }
});

export const { setPlay, setDateEnd, setPartyEnded, setHit, setMiss, setAttemptPicture } = gameControlSlice.actions;

export default gameControlSlice.reducer;
