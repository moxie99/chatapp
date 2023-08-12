import React from "react";

function Input({ name, state, setState, label = false }) {
  return (
    <div className='flex gap-1 flex-col'>
      {label && (
        <label htmlFor={name} className='text-teal-300 text-lg px-2'>
          {name}
        </label>
      )}
      <div>
        <input
          type='text'
          name={name}
          value={state}
          onChange={(e) => setState(e.target.value)}
          className='bg-input-background text-start focus:outline-none text-white h-10 rounded-lg w-full px-4 py-3'
        />
      </div>
    </div>
  );
}

export default Input;
