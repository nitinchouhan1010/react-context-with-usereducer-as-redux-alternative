import React from 'react';
import ComponentA from './ComponentA';
import ContextProvider from './ContextProvider';
import './style.css';

export default function App() {
  return (
    <div>
      <ContextProvider>
        <ComponentA />
      </ContextProvider>
    </div>
  );
}
