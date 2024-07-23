import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateDiscountCode, setDiscountCode } from '../redux/slice'; 
import { RootState } from '../redux/rootReducer';

const DiscountCode: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const discountCode = useSelector((state: RootState) => state.feature.discountCode);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(setDiscountCode(value));
    if (value) {
      setError('');
    }
  };

  const handleGenerate = () => {
    if (!inputValue) {
      setError('Enter the code');
      return;
    }
    if (!isValidCode(inputValue)) {
      setError('Invalid discount code. It must include 6 capital letters.');
      return;
    }
    dispatch(generateDiscountCode())
  };

  const isValidCode = (code: string) => /^[A-Z]{6}$/.test(code);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-semibold">Discount Code</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter discount code"
        className="border p-2 rounded w-full"
      />
      {error && (
        <span className="text-red-500">{error}</span>
      )}
      <button
        onClick={handleGenerate}
        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
      >
        Generate Discount Code
      </button>
      {(discountCode !== inputValue) && ( // Do it to prevent renderring what user inputted dynamically
        <div className="mt-2 p-2 bg-gray-100 border rounded">
          Generated Code: <span className="font-semibold">{discountCode}</span>
        </div>
      )}
    </div>
  );
};

export default DiscountCode;
