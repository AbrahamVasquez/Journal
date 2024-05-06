
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'auth',
  //declaracion del estado inicial de las variables
  initialState: {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
     //funciones que modifican el estado
  reducers: {
    login: (state, { payload } ) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.photoURL = payload.photoURL
      state.errorMessage = null;

    },
    logout: (state, { payload } ) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage;

    },
    checkingCredentials: (state) => {
        state.status = 'checking';
    }
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions; // Action creator functions
