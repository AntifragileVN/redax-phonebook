import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: [],
	reducers: {
		addContact: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(name, number) {
				return {
					payload: {
						name,
						number,
						id: nanoid(),
					},
				};
			},
		},
		deleteContact(state, action) {
			return state.filter((contact) => contact.id !== action.payload);
		},
		resetState(state, action) {
			return [];
		},
	},
});

export const { addContact, deleteContact, resetState } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
