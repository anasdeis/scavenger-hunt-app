import { createSlice } from '@reduxjs/toolkit';

export const sliderSlice = createSlice({
  name: 'slider',
  initialState: {
    userList: [],
    selectedUser: '-1',
    openQrModal: false
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.userList = action.payload;
    },
    toggleModal: (state, action) => {
      state.openQrModal = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    }
  }
});

export const { setSelectedUser, setUserList, toggleModal, setCurrentUser } = sliderSlice.actions;

export default sliderSlice.reducer;
