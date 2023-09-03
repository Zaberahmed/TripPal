import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { authApi } from './api/authApi';

export const store = configureStore({
	reducer: {
		user: userSlice,
		[authApi.reducerPath]: authApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
