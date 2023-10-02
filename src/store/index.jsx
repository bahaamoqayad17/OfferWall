import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootSlice";
import UserSlice from "./UserSlice";
import AppSlice from "./AppSlice";
import PaymentSlice from "./PaymentSlice";
import SettingSlice from "./SettingSlice";
import MessageSlice from "./MessageSlice";

export const store = configureStore({
  reducer: {
    root: RootReducer,
    users: UserSlice,
    apps: AppSlice,
    payments: PaymentSlice,
    settings: SettingSlice,
    messages: MessageSlice,
  },
});
