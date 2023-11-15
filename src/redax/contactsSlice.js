import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const handleReject = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
};

const handlePending = (state, action) => {
	state.isLoading = true;
};

const contactsSlice = createSlice({
	name: 'contacts',
	initialState: {
		items: [],
		isLoading: false,
		error: null,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.pending, handlePending)
			.addCase(fetchContacts.rejected, handleReject)
			///
			.addCase(addContact.fulfilled, (state, action) => {
				state.isLoading = false;
				state.items.push(action.payload);
			})
			.addCase(addContact.pending, handlePending)
			.addCase(addContact.rejected, handleReject)
			///
			.addCase(deleteContact.fulfilled, (state, action) => {
				const index = state.items.findIndex(
					(contact) => contact.id === action.payload
				);
				state.items.splice(index, 1);
				state.isLoading = false;
			})
			.addCase(deleteContact.pending, handlePending)
			.addCase(deleteContact.rejected, handleReject);
	},
	reducers: {
		// addContact: {
		// 	reducer(state, action) {
		// 		state.push(action.payload);
		// 	},
		// 	prepare(name, number) {
		// 		return {
		// 			payload: {
		// 				name,
		// 				number,
		// 				id: nanoid(),
		// 			},
		// 		};
		// 	},
		// },
		deleteContact(state, action) {
			return state.filter((contact) => contact.id !== action.payload);
		},
		resetState(state, action) {
			return [];
		},
	},
});

export const { resetState } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
