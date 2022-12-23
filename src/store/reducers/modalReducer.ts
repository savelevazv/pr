import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: boolean } = {
    value: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModal: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    },
})

export const { setModal } = modalSlice.actions
export const modalReducer = modalSlice.reducer