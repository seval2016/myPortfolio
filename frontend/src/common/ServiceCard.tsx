import React from 'react';

export type ServiceCardProps = {
  number: string;
  title: string;
  desc: string;
};

const ServiceCard = ({ number, title, desc }: ServiceCardProps) => (
  <div className="border border-gray-200 rounded-xl bg-white p-6 flex flex-col gap-4 hover:shadow-md transition">
    <span className="text-xs text-gray-400 font-semibold">{number}</span>
    <h3 className="text-base font-bold text-gray-900">{title}</h3>
    <p className="text-gray-500 text-sm flex-1">{desc}</p>
    <button className="flex items-center gap-2 text-indigo-700 font-semibold text-sm mt-2 group">
      Learn More
      <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
    </button>
  </div>
);

export default ServiceCard; 