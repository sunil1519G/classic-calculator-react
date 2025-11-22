import React, { useState } from 'react';
import './App.css';

const buttons = [
  { label: '7', type: 'num' }, { label: '8', type: 'num' }, { label: '9', type: 'num' }, { label: '/', type: 'op' },
  { label: '4', type: 'num' }, { label: '5', type: 'num' }, { label: '6', type: 'num' }, { label: '*', type: 'op' },
  { label: '1', type: 'num' }, { label: '2', type: 'num' }, { label: '3', type: 'num' }, { label: '-', type: 'op' },
  { label: '0', type: 'num' }, { label: '.', type: 'num' }, { label: '=', type: 'eq' }, { label: '+', type: 'op' },
  { label: 'C', type: 'clr' }
];

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (btn) => {
    if (btn.type === 'num' || btn.type === 'op') {
      setInput(input + btn.label);
    } else if (btn.type === 'eq') {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult('Error');
      }
    } else if (btn.type === 'clr') {
      setInput('');
      setResult('');
    }
  };

  return (
    <div className="calculator">
      <div className="display">{result || input || '0'}</div>
      <div className="keypad">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={btn.type}
            onClick={() => handleClick(btn)}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;