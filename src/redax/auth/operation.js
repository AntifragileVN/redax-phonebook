import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
	setAuthHeader: (token) => {
		axios.defaults.headers.common.Authorization = `Bearer ${token}`;
	},
	clearAuthHeader: () => {
		axios.defaults.headers.common.Authorization = '';
	},
};

export const register = createAsyncThunk(
	'auth/register',
	async (credentials, thunkAPI) => {
		try {
			const result = await axios.post('users/signup', credentials);
			token.setAuthHeader(result.data.token);

			return result.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const logIn = createAsyncThunk('users/login', async (credentials, thunkAPI) => {
	try {
		const result = await axios.post('users/login', credentials);
		token.setAuthHeader(result.data.token);
		return result.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	try {
		await axios.post('users/logout');
		token.clearAuthHeader();
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
	const state = thunkAPI.getState();
	const persistedToken = state.auth.token;

	if (persistedToken === null) {
		return thunkAPI.rejectWithValue('Unable to fetch user');
	}

	try {
		token.setAuthHeader(persistedToken);
		const result = await axios.get('users/current');
		return result.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message);
	}
});
