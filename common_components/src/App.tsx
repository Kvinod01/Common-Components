import React, { useState } from 'react';
import RadioButton from './components/ui_components/RadioButton/RadioButton';

// Define the structure for the options array
interface RadioOption {
  label: string;
  value: string;
  isDisabled?: boolean
}

const RadioGroupDemo: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('medium'); // Default selection

  // 1. Consolidate options into a single array
  const difficultyOptions: RadioOption[] = [
    { label: 'Easy', value: 'easy', isDisabled: true },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
    { label: 'Insane', value: 'insane' },
  ];

  const isSelected = (value: string) => value === selectedDifficulty;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDifficulty(event.target.value);
  };

  return (
    <div className="p-8 flex flex-col justify-center rounded-lg space-y-2  shadow-xl">
      <h3 className="text-white text-lg font-bold mb-4">Select Difficulty:</h3>

      {/* 2. Render the entire radio group using a single RadioButton component instance */}
      <RadioButton
        options={difficultyOptions} // Pass the array of options
        name="futuristic-radio-group"
        isSelected={isSelected}
        onChange={handleChange}
        // Apply a single size to the entire group
        size='medium'
      />

      <p className="pt-4 text-green-400 ">
        Currently Selected: **{selectedDifficulty.toUpperCase()}**
      </p>
    </div>
  );
};

export default RadioGroupDemo;