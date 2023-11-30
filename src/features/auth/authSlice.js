import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
// import { useContext } from "react";
const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  user: user || null,
  token: token || null,
};

// export const authContext = useContext(initialState)
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
  },
});

export const register = createAsyncThunk("auth/register", async (formData) => {
  try {
    return await authService.register(formData);
  } catch (error) {
    console.error(error);
  }
});

export const login = createAsyncThunk("auth/login", async (formData) => {
  try {
    return await authService.login(formData);
  } catch (error) {
    console.error(error);
  }
});

export default authSlice.reducer;
