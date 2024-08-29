// components/FancyList.tsx
import React from 'react';

// Define the props type for the FancyList component
type FancyListProps = {
  items: string[]; // Array of strings to display
};

const FancyList: React.FC<FancyListProps> = ({ items }) => {
  return (
    <ul className="fancy-list">
      {items.map((item, index) => (
        <li key={index} className="fancy-item">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FancyList;

