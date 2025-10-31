import React from 'react';
import { PrinterIcon } from './Icons';

interface PrintButtonProps {
    text: string;
}

const PrintButton: React.FC<PrintButtonProps> = ({ text }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 px-4 py-2 bg-earth-dark text-white rounded-full shadow-lg hover:bg-earth-text transition-colors focus:outline-none focus:ring-2 focus:ring-earth-main focus:ring-opacity-75 text-sm font-semibold"
      aria-label="Print Resume"
    >
      <PrinterIcon className="w-4 h-4" />
      <span>{text}</span>
    </button>
  );
};

export default PrintButton;
