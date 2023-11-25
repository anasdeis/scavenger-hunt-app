import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    unit: '',
    picture: '',
    funFact: '',
    qrCode: ''
  },
  reducers: {
    setPicture: (state, action) => {
      state.picture = action.payload;
    },
    setFunFact: (state, action) => {
      state.funFact = action.payload;
    },
    setQrCode: (state, action) => {
      state.qrCode += action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setUnity: (state, action) => {
      state.unit = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    }
  }
});

export const { setFirstName, setLastName, setPassword, setUnity, setEmail, setPicture, setFunFact, setQrCode } =
  userSlice.actions;

export default userSlice.reducer;
