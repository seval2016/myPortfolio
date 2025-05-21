import React from 'react';
import { educations } from '../data/educations';
import Title from '../components/common/Title';

const Education: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <Title subtitle="- EDUCATION" title="My Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {educations.map((edu, index) => (
          <div key={index} className="bg-[#f8fafc] rounded-xl shadow p-6 flex flex-col gap-2 border-l-4 border-indigo-400">
            <div className="text-lg font-semibold text-gray-800 mb-1">{edu.school} - {edu.degree}</div>
            <div className="text-indigo-600 font-medium">{edu.fieldOfStudy}</div>
            <div className="text-sm text-gray-500">{edu.startDate} - {edu.endDate || 'Present'}</div>
            <div className="text-sm text-gray-500">{edu.location}</div>
            {edu.gpa && <div className="text-sm text-indigo-700 font-semibold">GPA: {edu.gpa}</div>}
            <div className="text-sm text-gray-600 mt-1">{edu.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 