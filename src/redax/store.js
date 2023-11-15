import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
	filter: filterReducer,
	contacts: contactsReducer,
});

export const store = configureStore({
	reducer: rootReducer,
});
