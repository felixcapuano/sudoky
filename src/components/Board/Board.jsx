import React, { useState } from 'react';
import { useRef } from 'react';
import { Case } from '../Case';

const initBoard = (sudoku) => {
  const board = [];
  let row = -1;
  let col = 0;
  let value = 0;
  for (let i = 0; i < 81; i++) {
    col = i % 9;
    if (!col) row++;

    value = parseInt(sudoku[i]);

    board.push({
      x: col,
      y: row,
      value: value,
      correctValue: 0,
      notes: [],
      validated: value !== 0,
      isSelected: false,
      sameValue: false,
    });
  }

  return board;
};

const Board = ({ changeValue, sudoku }) => {
  const [selectedCase, setSelectedCase] = useState({});
  const [board, setBoard] = useState(initBoard(sudoku));

  if (
    changeValue.value &&
    !selectedCase?.validated
  ) {
    board[selectedCase.y * 9 + selectedCase.x].value = changeValue.value;
  }

  const eventHandler = (params) => {
    if (params.x === selectedCase.x && params.y === selectedCase.y) {
      return setSelectedCase({});
    }

    return setSelectedCase(params);
  };

  const selectState = (cell) => {
    const sc = selectedCase;
    if (cell?.x === sc?.x && cell?.y === sc?.y) {
      return 'selected';
    }

    if (cell.value === sc?.value) {
      return 'highlighted';
    }
    return 'normal';
  };

  return (
    <div
      style={{
        backgroundColor: 'black',
        position: 'relative',
        height: '400px',
        width: '400px',
      }}
    >
      {board.map((caseParams) => (
        <Case
          key={`${caseParams.x}${caseParams.y}`}
          params={caseParams}
          eventHandler={eventHandler}
          currentState={selectState(caseParams)}
        />
      ))}
    </div>
  );
};

export default Board;
