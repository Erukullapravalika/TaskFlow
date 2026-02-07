
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Role = "ADMIN" | "MANAGER" | "USER" | null;

const authSlice = createSlice({
  name: "auth",
  initialState: { role: null as Role, isAuthenticated: false },
  reducers: {
    loginSuccess: (state, action: PayloadAction<Role>) => {
      state.role = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
