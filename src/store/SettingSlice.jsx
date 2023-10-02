import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

export const fetchSetting = createAsyncThunk(
  "settings/fetchSetting",
  async (id, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get(`settings/5c8a1d5b0190b214360dc050`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSettings = createAsyncThunk(
  "settings/updateSettings",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`settings/5c8a1d5b0190b214360dc050`, item);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  setting: {},
  loading: false,
  error: null,
  count: 0,
};

const PaymentSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSetting.fulfilled, (state, action) => {
      state.setting = action.payload.data;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(updateSettings.fulfilled, (state, action) => {
      FireToast("success", "Setting Updated Successfully");
      state.payment = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export const { startLoading } = PaymentSlice.actions;
export default PaymentSlice.reducer;
