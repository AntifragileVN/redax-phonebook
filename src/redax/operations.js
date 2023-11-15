import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6554e34d63cafc694fe7278d.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/getAll', async (_, thunkApi) => {
	try {
		const response = await axios.get('/contacts');
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error.message);
	}
});

export const addContact = createAsyncThunk(
	'contacts/addContact',
	async (args, thunkApi) => {
		try {
			const response = await axios.post('/contacts', args);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

export const deleteContact = createAsyncThunk(
	'contacts/deleteContact',
	async (contactId, thunkApi) => {
		try {
			const response = await axios.delete(`/contacts/${contactId}`);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);
