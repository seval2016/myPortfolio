import React from 'react';

type ExperienceCardProps = {
  year: string;
  title: string;
  company: string;
  desc: string;
};

const ExperienceCard = ({ year, title, company, desc }: ExperienceCardProps) => (
  <div className="bg-white rounded-lg p-4 sm:p-6 shadow flex flex-col gap-2">
    <div className="flex items-center justify-between text-xs font-semibold mb-2">
      <span className="text-orange-500">-{year}</span>
      <span className="text-gray-400">-{company}</span>
    </div>
    <h3 className="text-base sm:text-lg font-bold text-gray-900">{title}</h3>
    <p className="text-gray-500 text-xs sm:text-sm">{desc}</p>
  </div>
);

export default ExperienceCard; 