import React from 'react';

type StatBoxProps = {
  value: string;
  label: string;
  color?: string;
  text?: string;
};

const StatBox = ({ value, label, color = '', text = '' }: StatBoxProps) => (
  <div className={`rounded-lg p-6 sm:p-8 flex flex-col items-center ${color}`}>
    <span className={`text-2xl sm:text-4xl font-bold mb-2 ${text}`}>{value}</span>
    <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500">{label}</span>
  </div>
);

export default StatBox; 