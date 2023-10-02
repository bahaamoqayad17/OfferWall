import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/lib/axios";
import { FireToast } from "@/lib/fireToast";

export const fetchApps = createAsyncThunk(
  "apps/fetchApps",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get("/apps", { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchOffers = createAsyncThunk(
  "apps/fetchOffers",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get("/apps/offers", { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSurveys = createAsyncThunk(
  "apps/fetchSurveys",
  async (params, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get("/apps/surveys", { params });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchApp = createAsyncThunk(
  "apps/fetchApp",
  async (id, { rejectWithValue, dispatch }) => {
    dispatch(startLoading());
    try {
      const res = await axios.get(`/apps/${id}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateApp = createAsyncThunk(
  "apps/updateApp",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.put(`/apps/${item._id}`, item);
      dispatch(fetchApps());
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteApp = createAsyncThunk(
  "apps/deleteApp",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/apps/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const myApps = createAsyncThunk(
  "apps/myApps",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/apps/myApps`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  apps: [],
  offers: [],
  surveys: [],
  app: {},
  loading: false,
  error: null,
  count: 0,
};

const AppSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApps.fulfilled, (state, action) => {
      state.apps = action.payload.data;
      state.count = action.payload.count;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(myApps.fulfilled, (state, action) => {
      state.apps = action.payload.data;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = [
        ...action.payload.data.data,
        ...action.payload.offerToro.offers,
      ];
      state.count = action.payload.offerToro.offers_count;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchSurveys.fulfilled, (state, action) => {
      state.surveys = action.payload.data.offers;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchApp.fulfilled, (state, action) => {
      state.app = action.payload.data;
      state.error = null;
      state.loading = false;
    });
    builder.addCase(updateApp.fulfilled, (state, action) => {
      FireToast("success", "App Updated Successfully");
      state.app = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteApp.fulfilled, (state, action) => {
      state.app = action.payload;
      state.loading = false;
      state.error = null;
    });
  },
});

export const { startLoading } = AppSlice.actions;
export default AppSlice.reducer;
