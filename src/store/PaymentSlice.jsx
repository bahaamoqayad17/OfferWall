import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const fetchPayments = createAsyncThunk(
  "Payments/fetchPayments",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get("payments", { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchPayment = createAsyncThunk(
  "Payments/fetchPayment",
  async (id, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get(`payments/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updatePayment = createAsyncThunk(
  "Payments/updatePayment",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`payments/${item._id}`, item);
      dispatch(fetchPayments());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePayment = createAsyncThunk(
  "Payments/deletePayment",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`payments/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  payments: [],
  payment: {},
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
    builder.addCase(fetchPayments.fulfilled, (state, action) => {
      state.payments = action.payload.data;
      state.count = action.payload.count;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchPayment.fulfilled, (state, action) => {
      state.payment = action.payload.data;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(updatePayment.fulfilled, (state, action) => {
      FireToast("success", "Payment Updated Successfully");
      state.payment = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deletePayment.fulfilled, (state, action) => {
      state.payment = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export const { startLoading } = PaymentSlice.actions;
export default PaymentSlice.reducer;
