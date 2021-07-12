import { configureStore } from "@reduxjs/toolkit";
import sudokuReducer from './slices/sudoku-slices';

const store = configureStore({
    reducer: {
        sudoku: sudokuReducer
    }
});

export type RootType = ReturnType<typeof store.getState>;
export default store;