import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import BaseClient from "../Api/ApiClient";

const initialState = {
  token: localStorage.getItem("authToken") || null,
  responseData: null,
};

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }) => {
    try {
      const response = await BaseClient.post("user/login", {
        email,
        password,
      });
      const token = response.data?.data;
      return { token, responseData: response.data };
    } catch (error) {
      return error.data.message;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      if (action.payload) {
        localStorage.setItem("authToken", action.payload);
      } else {
        localStorage.removeItem("authToken");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.responseData = action.payload.responseData;
        if (action.payload.token) {
          localStorage.setItem("authToken", action.payload.token);
        }
      })
      .addCase(userLogin.rejected, (state) => {
        state.token = null;
        state.responseData = null;
      });
  },
});

export const { setToken } = authSlice.actions;

const AuthReducer = authSlice.reducer;
export default AuthReducer;
