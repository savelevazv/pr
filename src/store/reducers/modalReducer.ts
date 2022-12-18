import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../index';

const initialState: { value: boolean } = {
    value: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state) => {
            state.value = true
        },

        onCloseModal: (state) => {
            state.value = false
        }
    },
})

export const { openModal, onCloseModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer