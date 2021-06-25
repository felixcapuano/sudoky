import React, { useState } from 'react';

const Case = ({ params, eventHandler, currentState }) => {
  const clickHandler = () => {
    if (eventHandler) eventHandler(params);
  };

  const initialNote = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
  }
  const [note, setNote] = useState(initialNote);

  const states = {
    normal: {
      backgroundColor: 'whitesmoke',
    },
    validated: {
      backgroundColor: 'lightgreen'
    },
    selected: {
      backgroundColor: 'lightyellow',
    },
    highlighted: {
      backgroundColor: 'green',
    },
  };

  return (
    <div
      onClick={clickHandler}
      style={{
        position: 'absolute',
        backgroundColor: 'whitesmoke',
        left: `${params.x * 11 + 0.5}%`,
        top: `${params.y * 11 + 0.5}%`,
        height: `${11}%`,
        width: `${11}%`,
        border: 'solid 1px',
        ...states[currentState],
      }}
    >
      {params.value != 0 ? params.value : ''}
    </div>
  );
};

export default Case;
