import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice';
import tripSlice from './features/tripSlice';

import { apiSlice } from './api/apiSlice';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		user: userSlice,
		trip: tripSlice,
	},

	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
