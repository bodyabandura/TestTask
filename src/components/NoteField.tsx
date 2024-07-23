import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNote } from '../redux/slice'; 
import { RootState } from '../redux/rootReducer'; 

const NoteField: React.FC = () => {
  const dispatch = useDispatch();
  const note = useSelector((state: RootState) => state.feature.note);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setNote(event.target.value));
  };

  return (
    <div className="flex flex-col space-y-2">
      <h2 className="text-xl font-semibold">Notes</h2>
      <textarea
        value={note}
        onChange={handleChange}
        placeholder="Enter notes"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default NoteField;
