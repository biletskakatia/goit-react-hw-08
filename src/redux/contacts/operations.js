import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const responce = await axios.get("/contacts");
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk("contacts/addContact",
    async (newContacts, thunkAPI) => {
        try {
            const responce = await axios.post("/contacts", newContacts);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk("contacts/deleteContact",
    async (contactsId, thunkAPI) => {
        try {
            const responce = await axios.delete(`/contacts/${contactsId}`);
            return responce.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);