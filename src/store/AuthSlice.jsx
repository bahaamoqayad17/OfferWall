import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";
import Router from "next/router";

export const register = createAsyncThunk(
  "auth/register",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post("auth/register", item);
      Router.push("/");
      FireToast(
        "success",
        "Registration Successful, Wait For Accept From Admin"
      );
      return res.data;
    } catch (error) {
      FireToast("error", error.response.data.message);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post("auth/login", item);
      Router.push("/user");
      FireToast("success", "Login Successful");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      return res.data;
    } catch (error) {
      FireToast("error", error.response.data.message);

      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      FireToast("success", "Login Successful");

      state.user = action.payload.data;
      state.error = null;
      state.loading = false;
    });
  },
});

export const { startLoading } = AuthSlice.actions;
export default AuthSlice.reducer;
