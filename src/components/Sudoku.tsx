import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './sudoku.scss';
import { changeBoard } from '../slices/sudoku-slices';
import { RootType } from '../store';
import Solver from '../solver';

const Sudoku = () => {
    let board = useSelector<RootType>(state => state.sudoku) as string[][];

    useEffect(() => {
        document.title = "Sudoku solver";
    }, []);

    useEffect(() => {
        /**
     * Display board to UI
     * @returns 
     */
        const displayBoardToUI = (): void => {
            let divs = document.querySelector("#board-div")?.getElementsByTagName("div") ?? [];

            let rowStart = 0, colStart = 0, rows = board.length, cols = board[0].length;
            for (let i = 0, n = divs.length; i < n; i++) {
                let child = divs[i] as HTMLDivElement;

                if (child !== null && child.className === 'num-cell') {
                    child.innerHTML = board[rowStart][colStart++];
                    if (colStart === cols) {
                        ++rowStart;
                        colStart = 0;
                    }

                    if (rowStart === rows) {
                        return;
                    }
                }
            }
        }

        displayBoardToUI();
    }, [board]);
    
    const dispatch = useDispatch();

    const dragNumber = (e: React.DragEvent<HTMLInputElement>): void => {
        e.dataTransfer.setData("text/plain", (e.target as HTMLInputElement).value);
    }

    const allowDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        let data = e.dataTransfer.getData("text/plain");
        (e.target as HTMLDivElement).innerHTML = data;
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
        e.preventDefault();
        if ((e.key >= '1' && e.key <= '9')) {
            (e.target as HTMLDivElement).innerHTML = e.key;
        } else if (e.keyCode === 8 || e.keyCode === 46) {   // 8: backspace, 46: delete
            (e.target as HTMLDivElement).innerHTML = '';
        }
    }

    //Draw board
    const rowsInBoard: React.ReactElement[] = [];
    for (let i = 0; i < 9; i++) {
        const cells: React.ReactElement[] = [];
        for (let k = 0; k < 9; k++) {
            cells.push(React.createElement('div', { className: 'num-cell', tabIndex: 0, onDragOver: allowDrop, onDrop: handleDrop, onKeyDown: handleKeyDown }));
        }

        rowsInBoard.push(React.createElement('div', { className: 'row' }, cells));
    }

    /**
     * Set value for board from UI
     */
    const initializeBoardFromUI = (): string[][] => {
        let divs = document.querySelector("#board-div")?.getElementsByTagName("div") ?? [];
        let newBoard: string[][] = [];
        let cols = board[0].length;
        let rowStart = 0, colStart = 0;
        let childArr: string[] = [];

        for (let i = 0, n = divs.length; i < n; i++) {
            //newBoard[i] = [];
            let child = divs[i] as HTMLDivElement;
            if (child !== null && child.className === "num-cell") {
                childArr.push(child.innerHTML);
                if (colStart === cols - 1)  {
                    let tempArr = [...childArr];
                    newBoard.push(tempArr);
                }

                ++colStart;
                if (colStart === cols) {
                    ++rowStart;
                    colStart = 0;
                    childArr = [];
                }
            }
        }

        return newBoard;
    }

    const clearBoard = (): void => {
        const newBoard: string[][] = Array(board.length);
        let cols = board[0].length;
        for (let i = 0, n = board.length; i < n; i++) {
            newBoard[i] = Array(cols).fill('');
        }

        dispatch(changeBoard(newBoard));
    }

    /**
     * Solve puzzle
     */
    const produceSolution = async(): Promise<void> => {
        let newBoard = initializeBoardFromUI();
        const solver = new Solver(newBoard);
        newBoard = await solver.solve();
        dispatch(changeBoard(newBoard));
    }

    return (
        <div className="main">
            <section id="numbers-div">
                <input type="button" value="1" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="2" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="3" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="4" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="5" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="6" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="7" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="8" draggable="true" onDragStart={dragNumber} />
                <input type="button" value="9" draggable="true" onDragStart={dragNumber} />
            </section>
            <section id="board-div">
                { rowsInBoard }
                {/* <div className="row">
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                    <div className="num-cell" tabIndex={0} onDragOver={allowDrop} onDrop={handleDrop} onKeyDown={handleKeyDown} />
                </div> */}
            </section>
            <section id="control-table">
                <input type="button" value="Clear board" onClick={clearBoard} />
                <input type="button" value="Give me the answer" onClick={produceSolution} />
            </section>
        </div>
    )
}

export default Sudoku;