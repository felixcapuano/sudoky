import React from 'react';

const Case = ({ params, eventHandler, currentState }) => {
  const clickHandler = () => {
    if (eventHandler) eventHandler(params);
  };

  const states = {
    normal: {
      backgroundColor: 'whitesmoke',
    },
    selected: {
      backgroundColor: 'lightgreen',
    },
    highlighted: {
      backgroundColor: 'lightblue',
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
