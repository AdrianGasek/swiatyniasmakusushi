// components/Button.tsx
import React from 'react';

type ButtonProps = {
  className?: string,
  onClick?: () => void;
  text: string;
  variant?: 'primary' | 'secondary' | 'danger';
};

const Button: React.FC<ButtonProps> = ({ onClick, text, variant = 'primary', className }) => {
  const baseStyles = 'font-["DistilleryStrong"] text-[30px] px-6 py-3 rounded-lg transition duration-300 ease-in-out transform focus:outline-none';
  const variantStyles = {
    primary: 'bg-[#00A240] text-black shadow-custom hover:scale-105',
    secondary: 'bg-gray-500 text-black hover:bg-gray-600 hover:scale-105',
    danger: 'bg-red-500 text-black hover:bg-red-600 hover:scale-105',
  };

  return (
    <button 
      onClick={onClick} 
      className={`${className} ${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
};

export default Button;
