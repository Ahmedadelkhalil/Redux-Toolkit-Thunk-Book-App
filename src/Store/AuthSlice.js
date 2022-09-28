import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, name: "Ahmed Adel" },
  reducers: {
    LoggedInOut: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});
export const { LoggedInOut } = authSlice.actions;
export default authSlice.reducer;
