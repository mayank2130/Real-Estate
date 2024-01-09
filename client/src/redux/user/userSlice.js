import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload; // Corrected assignment
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateUserStart: (state, action) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.currentUser = action.payload;
      (state.loading = false), (state.error = null);
    },
    updateUserFaliure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteUserStart: (state, actiion) => {
      state.loading = true
    },
    deleteUserSuccess: (state,action) =>{
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteUserFaliure: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    signOutUserStart: (state, actiion) => {
      state.loading = true
    },
    signOutUserSuccess: (state,action) =>{
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    signOutUserFaliure: (state, action) => {
      state.error = action.payload
      state.loading = false
    }
  },
});

export const {
  signInStart,
  signInSuccess,
  signInFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFaliure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFaliure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFaliure
} = userSlice.actions;

export default userSlice.reducer;
