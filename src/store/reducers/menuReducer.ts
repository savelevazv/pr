import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: boolean } = {
    value: false
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload
        }
    },
})

export const { setMenu } = menuSlice.actions
export const menuReducer = menuSlice.reducer
