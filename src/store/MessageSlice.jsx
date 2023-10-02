import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";

export const fetchMessages = createAsyncThunk(
  "messages/fetchMessages",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get(`messages`, { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addMessage = createAsyncThunk(
  "messages/addMessage",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post(`messages`, item);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  messages: [],
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
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload.data;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(addMessage.fulfilled, (state, action) => {
      FireToast("success", "Message Send Successfully");
      state.loading = false;
      state.error = null;
    });
  },
});

export const { startLoading } = PaymentSlice.actions;
export default PaymentSlice.reducer;
