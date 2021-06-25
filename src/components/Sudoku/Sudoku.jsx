import React, { useState } from 'react';
import { Board } from '../Board';

import { sudoku } from './sudoku';

const _sudoku = sudoku.generate(10).replace(/\./g, '0');

const Sudoku = () => {
  const initialValueButton = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
  };
  const [_valueButtons, setValueButtons] = useState(initialValueButton);

  const [newValue, setNewValue] = useState({ value: 0, note: false });

  const clickHandler = (e) => {
    const targetValue = parseInt(e.target.value);
    const nv = newValue.value !== targetValue ? targetValue : 0;
    setNewValue({ value: nv, note: false });
  };

  const valueButtons = Object.keys(_valueButtons).map((value) => {
    return (
      <button
        value={value}
        key={value}
        disabled={!_valueButtons[value]}
        onClick={clickHandler}
      >
        {value}
      </button>
    );
  });

  return (
    <div>
      <Board
        sudoku={_sudoku}
        changeValue={newValue}
        setChangeValue={setNewValue}
      />
      <div style={{ margin: '20px', position: 'absolute' }}>
        {valueButtons}
        <button>Note</button>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Sudoku;
