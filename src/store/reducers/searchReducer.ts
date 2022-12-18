import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { searchValue: string } = {
    searchValue: ''
}

const searchSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        }
    },
})

export const { setSearchValue } = searchSlice.actions
export const searchReducer = searchSlice.reducer