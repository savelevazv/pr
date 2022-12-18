import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { activeIndex: number } = {
    activeIndex: 0
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveIndex: (state, action: PayloadAction<number>) => {
            state.activeIndex = action.payload
        }
    },
})

export const { setActiveIndex } = filterSlice.actions
export const filterReducer = filterSlice.reducer