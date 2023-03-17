import React, { useMemo } from 'react';
import { useState } from 'react';
import { findPrime } from '../utils/helper';

//---------------------------- Learn useMemo() --------------------------------
// Go to http://localhost:3000/demo to explore live

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering...");

  // Heavy Operation
  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        'm-4 p-2 w-96 h-96 border border-black' +
        (isDarkTheme && ' bg-gray-900 text-pink-600')
      }
    >
      <div>
        <button
          className='m-10 p-2 bg-green-200'
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className='border border-black w-72 px-2'
          type='text'
          value={text}
          onChange={e => setText(e.target.value)}
        ></input>
      </div>
      <div>
        <h1 className='mt-4 font-bold text-xl'>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
