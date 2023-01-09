import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { searchSliceState, Shop } from '../types';

const initialState: searchSliceState = {
    mobileSearchState: false,
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
        },
        setMobileSearchState: (state, action: PayloadAction<boolean>) => {
            state.mobileSearchState = action.payload
        }
    },
})

export const { setSearchValue, setFoundShops, setMobileSearchState } = searchSlice.actions
export const searchReducer = searchSlice.reducer