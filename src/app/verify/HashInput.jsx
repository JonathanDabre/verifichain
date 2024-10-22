"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Invalid from './Invalid';
import Valid from './Valid';

const HashInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleVerify = () => {
    console.log(inputValue); // Log the input value
  };



  return (
    <div>
      <div className="mb-6">
        <input
          type="text"
          id="large-input"
          className="block w-full p-4 bg-[#0A0A0A] border border-[#656565] rounded-lg text-white text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value state
        />
      </div>
      <div className="buttons flex justify-end space-x-3">
        <Link href="/" className="cancel">
          <button
            className="border border-white text-white text-sm font-semibold rounded-lg px-5 py-2"
          >
            Cancel
          </button>
        </Link>
        <div className="submit">
          <button
            className={`rounded-lg px-5 py-2 text-sm font-semibold text-black ${inputValue ? 'bg-white' : 'bg-gray-400'}`}
            onClick={handleVerify} // Verify button functionality
            disabled={!inputValue} // Disable the button if input is empty
          >
            Verify
          </button>
        </div>
      </div>

      <div className="mt-10">
        <Invalid/>
      </div>
      <div className="mt-10">
        <Valid/>
      </div>
    </div>
  );
};

export default HashInput;
