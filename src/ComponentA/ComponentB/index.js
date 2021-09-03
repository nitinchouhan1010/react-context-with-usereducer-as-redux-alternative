import React from 'react';
import React, { useState, useContext, useEffect } from 'react';
import { MainContext } from '../../ContextProvider';

const ComponentB = () => {
  const ContextValue = useContext(MainContext);

  const { assetDetail, state } = ContextValue;

  return (
    <div className="component-b">
      <p>component-b</p>
      {state.count}
    </div>
  );
};

export default ComponentB;
