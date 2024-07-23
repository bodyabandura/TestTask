import React from 'react';
import RadioButtons from './components/RadioButton';
import DiscountCode from './components/DiscountCode';
import NoteField from './components/NoteField';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto p-4 space-y-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold text-center mb-4">Discount Generator</h1>
        <RadioButtons />
        <DiscountCode />
        <NoteField />
      </div>
    </div>
  );
};

export default App;
