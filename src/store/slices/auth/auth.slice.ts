import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../../types';
// import { checkAuthState, loginWithAuth0, logoutUser } from './auth.thunk';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
  accessToken: null,
  refreshToken: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // Login with Auth0
  //     .addCase(loginWithAuth0.pending, (state) => {
  //       state.isLoading = true;
  //       state.error = null;
  //     })
  //     .addCase(loginWithAuth0.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isAuthenticated = true;
  //       state.user = action.payload.user;
  //       state.accessToken = action.payload.credentials.accessToken;
  //       state.refreshToken = action.payload.credentials.refreshToken;
  //       state.error = null;
  //     })
  //     .addCase(loginWithAuth0.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.isAuthenticated = false;
  //       state.user = null;
  //       state.accessToken = null;
  //       state.refreshToken = null;
  //       state.error = action.payload as string;
  //     })
  //     // Logout
  //     .addCase(logoutUser.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(logoutUser.fulfilled, (state) => {
  //       state.isLoading = false;
  //       state.isAuthenticated = false;
  //       state.user = null;
  //       state.accessToken = null;
  //       state.refreshToken = null;
  //       state.error = null;
  //     })
  //     .addCase(logoutUser.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload as string;
  //     })
  //     // Check auth state
  //     .addCase(checkAuthState.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(checkAuthState.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       if (action.payload) {
  //         state.isAuthenticated = true;
  //         state.user = action.payload.user;
  //         state.accessToken = action.payload.credentials.accessToken;
  //         state.refreshToken = action.payload.credentials.refreshToken;
  //       }
  //     })
  //     .addCase(checkAuthState.rejected, (state) => {
  //       state.isLoading = false;
  //       state.isAuthenticated = false;
  //       state.user = null;
  //       state.accessToken = null;
  //       state.refreshToken = null;
  //     });
  // },
});

export const { clearError, setLoading } = authSlice.actions;
export default authSlice.reducer;