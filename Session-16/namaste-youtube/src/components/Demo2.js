import React, { useEffect } from 'react';
import { useState, useRef } from 'react';

//--------------------------------- Learn useRef() --------------------------------------
// Go to http://localhost:3000/demo to explore live

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;

  const ref = useRef(0);
  // console.log(ref);
  /**
   * ref not like => ref = 0
   * ref = {current: 0} <- whtaever initial value is passed in useRef
   *
   *
   */

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log('Namaste', Math.random());
    }, 1000);

    return () => clearInterval(i.current);
  }, []);

  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            x = x + 1;
            console.log('x = ' + x);
          }}
        >
          Increase x
        </button>
        <span className='font-bold text-xl'>Let x = {x}</span>
      </div>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>
        <span className='font-bold text-xl'>State y = {y}</span>
      </div>
      <div>
        <button
          className='bg-green-100 p-2 m-4'
          onClick={() => {
            ref.current = ref.current + 1;
            console.log('ref = ', ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
      </div>
      <button
        className='p-4 m-4 font-bold bg-red-500 text-white rounded-lg'
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
