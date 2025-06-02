// import { useCallback, useEffect } from 'react';
// import { Alert } from 'react-native';
// import { useAppDispatch, useAppSelector } from '../../store';
// import { checkAuthState, loginWithAuth0, logoutUser } from '../../store/slices/auth/auth.thunk';
// import { clearError } from '../../store/slices/auth/auth.slice';

// export const useAuth = () => {
//   const dispatch = useAppDispatch();
//   const { isAuthenticated, user, isLoading, error, accessToken } = useAppSelector(
//     state => state.auth
//   );

//   // Check authentication state on app start
//   useEffect(() => {
//     dispatch(checkAuthState());
//   }, [dispatch]);

//   // Handle errors
//   useEffect(() => {
//     if (error) {
//       Alert.alert('Authentication Error', error, [
//         { text: 'OK', onPress: () => dispatch(clearError()) }
//       ]);
//     }
//   }, [error, dispatch]);

//   const login = useCallback(async () => {
//     try {
//       await dispatch(loginWithAuth0()).unwrap();
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   }, [dispatch]);

//   const logout = useCallback(async () => {
//     try {
//       await dispatch(logoutUser()).unwrap();
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   }, [dispatch]);

//   const clearAuthError = useCallback(() => {
//     dispatch(clearError());
//   }, [dispatch]);

//   return {
//     // State
//     isAuthenticated,
//     user,
//     isLoading,
//     error,
//     accessToken,
    
//     // Actions
//     login,
//     logout,
//     clearError: clearAuthError,
//   };
// };