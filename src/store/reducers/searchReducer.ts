import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchSliceState, Shop } from '../types';

const initialState: searchSliceState = {
    searchValue: '',
    foundShops: []
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setFoundShops: (state, action: PayloadAction<Shop[]>) => {
            state.foundShops = action.payload
        }
    },
})

export const { setSearchValue, setFoundShops } = searchSlice.actions
export const searchReducer = searchSlice.reducer