import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Shop, shopsSliceState } from '../types';

const initialState: shopsSliceState = {
    shops: [],
    isLoading: false,
    error: ''
}

const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
        shopsFetching(state) {
            state.isLoading = true
        },
        shopsFetchingSuccess(state, action: PayloadAction<Shop[]>) {
            state.isLoading = false
            state.error = ''
            state.shops = action.payload
        },
        shopsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export const { shopsFetching, shopsFetchingSuccess, shopsFetchingError } = shopsSlice.actions
export const shopsReducer = shopsSlice.reducer
