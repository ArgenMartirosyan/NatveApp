// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { User } from "../../../types";

// export const loginWithAuth0 = createAsyncThunk(
//   'auth/loginWithAuth0',
//   async (_, { rejectWithValue }) => {
//     try {
//       const credentials = await auth0Service.webAuth.authorize({
//         scope: 'openid profile email offline_access',
//         audience: `https://${process.env.AUTH0_DOMAIN}/userinfo`,
//       });

//       const userInfo = await auth0Service.auth.userInfo({
//         token: credentials.accessToken,
//       });

//       return {
//         credentials,
//         user: {
//           id: userInfo.sub,
//           email: userInfo.email,
//           name: userInfo.name || userInfo.email,
//           nickname: userInfo.nickname,
//           picture: userInfo.picture,
//           email_verified: userInfo.email_verified,
//         } as User,
//       };
//     } catch (error) {
//       return rejectWithValue(error instanceof Error ? error.message : 'Login failed');
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await auth0Service.webAuth.clearSession();
//       return true;
//     } catch (error) {
//       return rejectWithValue(error instanceof Error ? error.message : 'Logout failed');
//     }
//   }
// );

// export const checkAuthState = createAsyncThunk(
//   'auth/checkAuthState',
//   async (_, { rejectWithValue }) => {
//     try {
//       // Check if user has valid credentials stored
//       const hasValidSession = await auth0Service.auth.hasValidCredentials();
//       if (hasValidSession) {
//         const credentials = await auth0Service.auth.getCredentials();
//         const userInfo = await auth0Service.auth.userInfo({
//           token: credentials.accessToken,
//         });

//         return {
//           credentials,
//           user: {
//             id: userInfo.sub,
//             email: userInfo.email,
//             name: userInfo.name || userInfo.email,
//             nickname: userInfo.nickname,
//             picture: userInfo.picture,
//             email_verified: userInfo.email_verified,
//           } as User,
//         };
//       }
//       return null;
//     } catch (error) {
//       return rejectWithValue('Session check failed');
//     }
//   }
// );