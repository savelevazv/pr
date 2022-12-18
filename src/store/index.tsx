import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./reducers/filterReducer";
import { menuReducer } from './reducers/menuReducer';
import { modalReducer } from "./reducers/modalReducer";
import { searchReducer } from "./reducers/searchReducer";
import { shopsReducer } from "./reducers/shopsReducer";



const rootReducer = combineReducers({
    menu: menuReducer,
    modal: modalReducer,
    filter: filterReducer,
    search: searchReducer,
    shops: shopsReducer
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type RootDispatch = typeof store.dispatch