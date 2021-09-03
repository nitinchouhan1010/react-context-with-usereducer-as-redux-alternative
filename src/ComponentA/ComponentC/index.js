import React from 'react';
import React, { useContext } from 'react';
import { MainContext } from '../../ContextProvider';

const ComponentC = () => {
  const ContextValue = useContext(MainContext);
  const { dispatch } = ContextValue;

  return (
    <div>
      <div>
        {' '}
        <button onClick={() => dispatch({ type: 'decrement' })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default ComponentC;
