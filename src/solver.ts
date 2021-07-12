export default class Solver {
    board: string[][];
    rowMap: Map<number, string[]>;
    colMap: Map<number, string[]>;
    cellMap: Map<number, string[]>;

    constructor(board: string[][]) {
        this.board = board;
        this.rowMap = new Map<number, string[]>();
        this.colMap = new Map<number, string[]>();
        this.cellMap = new Map<number, string[]>();

        //Fill in value
        let rows = this.board.length;
        let cols = this.board[0].length;

        for (let i = 0; i < rows; i++)
            for (let j = 0; j < cols; j++) {
                let c = this.board[i][j];

                if (c !== '') {
                    if (!this.rowMap.has(i)) {
                        this.rowMap.set(i, []);
                    }

                    if (!this.colMap.has(j)) {
                        this.colMap.set(j, []);
                    }

                    let cell = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                    if (!this.cellMap.has(cell)) {
                        this.cellMap.set(cell, []);
                    }

                    this.rowMap.set(i,[...this.rowMap.get(i) ?? [], c]);
                    this.colMap.set(j, [...this.colMap.get(j) ?? [], c]);
                    this.cellMap.set(cell, [...this.cellMap.get(cell) ?? [], c]);
            }
        }
    }

    solve(): string[][] {
        this.tryNext(0, 0, this.board.length, this.board[0].length);
        return this.board;
    }
    
    tryNext(rowStart: number, colStart: number, rows: number, cols: number): boolean {
        if (colStart === cols) {
            ++rowStart;
            colStart = 0;
        }
    
        if (rowStart === rows) {
            return true;
        }

        while (this.board[rowStart][colStart] !== '') {
            ++colStart;
            if (colStart === cols) {
                ++rowStart;
                colStart = 0;
            }

            if (rowStart === rows) {
                return true;
            }
        }
    
        for (let c of '123456789') {
            if (this.isValid(rowStart, colStart, c)) {
                this.board[rowStart][colStart] = c;
                if (!this.rowMap.has(rowStart)) {
                    this.rowMap.set(rowStart, [c]);
                } else {
                    this.rowMap.set(rowStart, [...this.rowMap.get(rowStart) ?? [], c]);
                }

                if (!this.colMap.has(colStart)) {
                    this.colMap.set(colStart, [c]);
                } else {
                    this.colMap.set(colStart, [...this.colMap.get(colStart) ?? [], c])
                }

                let cell = Math.floor(rowStart / 3) * 3 + Math.floor(colStart / 3);
                if (!this.cellMap.has(cell)) {
                    this.cellMap.set(cell, [c]);
                } else {
                    this.cellMap.set(cell, [...this.cellMap.get(cell) ?? [], c]);
                }

                if (this.tryNext(rowStart, colStart + 1, rows, cols)) {
                    return true;
                }

                this.board[rowStart][colStart] = '';
                this.rowMap.set(rowStart, this.rowMap.get(rowStart)?.filter(m => m !== c) ?? []);
                this.colMap.set(colStart, this.colMap.get(colStart)?.filter(m => m !== c) ?? []);
                this.cellMap.set(cell, this.cellMap.get(cell)?.filter(m => m !== c) ?? []);
            }
        }

        return false;
    }

    isValid(row: number, col: number, c: string): boolean {
        //Check row
        if (this.rowMap.has(row) && this.rowMap.get(row)?.indexOf(c) !== -1) {
            return false;
        }

        //Check column
        if (this.colMap.has(col) && this.colMap.get(col)?.indexOf(c) !== -1) {
            return false;
        }

        //Check cell
        const cell = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        if (this.cellMap.has(cell) && this.cellMap.get(cell)?.indexOf(c) !== -1) {
            return false;
        }

        return true;
    }
}