import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user.interface';

const initialUserState: User = {
	_id: '',
	name: '',
	email: '',
	password: '',
	phone: '',
	gender: '',
	nationality: '',
	date_of_birth: undefined,
	passportId: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState: initialUserState,
	reducers: {
		insertUser: (state, action) => {
			return { ...state, ...action.payload };
		},
		removeUser: (state, action) => {
			return initialUserState;
		},
	},
});

export const { insertUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
