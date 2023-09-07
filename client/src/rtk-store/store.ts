import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import tripSlice from './slices/tripSlice';
import { authApi } from './api/authApi';

export const store = configureStore({
	reducer: {
		user: userSlice,
		trip: tripSlice,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
