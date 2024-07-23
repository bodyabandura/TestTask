import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOption } from '../redux/slice'; 
import { RootState } from '../redux/rootReducer'; 

const options = ['Male', 'Female', 'Other'];

const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const selectedOption = useSelector((state: RootState) => state.feature.selectedOption);

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-semibold">Select Gender</h2>
      {options.map(option => (
        <label key={option} className="flex items-center">
          <input
            type="radio"
            name="option"
            value={option}
            checked={selectedOption === option}
            onChange={() => dispatch(setOption(option))}
            className="mr-2"
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButtons;
