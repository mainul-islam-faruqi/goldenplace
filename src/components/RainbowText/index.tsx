import React from 'react';
import './style.scss';

interface RainbowTextProps {
  children: string;
}

const RainbowText: React.FC<RainbowTextProps> = ({ children }) => {
  // Rainbow colors
  const colors = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#8B00FF',
  ];

  // Split the text into individual characters
  const characters = children.split('');

  // Apply rainbow colors to each character
  const rainbowText = characters.map((char, index) => (
    <span key={index} style={{ color: colors[index % colors.length] }}>
      {char}
    </span>
  ));

  return (
    <div className="rainbow-text-container">
      <div className="rainbow-text-animation">
        {children.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default RainbowText;
