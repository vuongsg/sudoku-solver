import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let initialState: string[][] = Array(9);
for (let i = 0; i < 9; i++) {
    initialState[i] = Array(9).fill('');
}

const sudokuSlice = createSlice({
    name: 'sudoku',
    initialState: initialState,
    reducers: {
        changeBoard: (state: string[][], action: PayloadAction<string[][]>) => {
            return action.payload;
        }
    }
})

export const { changeBoard } = sudokuSlice.actions;
export default sudokuSlice.reducer;