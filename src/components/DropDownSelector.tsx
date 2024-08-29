// components/DropDownSelect.tsx
import React from 'react';

// Define the props type for the DropDownSelect component
type DropDownSelectProps = {
  items: string[]; // Array of strings to be displayed as dropdown options
  label?: string;  // Optional label for the dropdown
  onSelect: (value: string) => void; // Callback function to handle selection
};

const DropDownSelect: React.FC<DropDownSelectProps> = ({ items, label, onSelect }) => {
  // Handle selection change
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      {label && <label style={{ marginRight: '10px' }}>{label}</label>}
      <select onChange={handleChange} style={{ padding: '5px', borderRadius: '4px' }}>
        <option value="">Select an option</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownSelect;

