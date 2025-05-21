import React from 'react';
import type { Certificate } from '../types/Certificate';

const mockCertificates: Certificate[] = [
  {
    id: 1,
    name: 'Full Stack Web Development',
    issuer: 'Coursera',
    issueDate: '2022-05-01',
    expiryDate: null,
    credentialId: 'ABC123',
    credentialUrl: 'https://coursera.org/verify/ABC123',
    imageUrl: 'https://placehold.co/120x120/png',
  },
  {
    id: 2,
    name: 'Java Programming',
    issuer: 'Udemy',
    issueDate: '2021-10-15',
    expiryDate: null,
    credentialId: 'XYZ789',
    credentialUrl: 'https://udemy.com/certificate/XYZ789',
    imageUrl: 'https://placehold.co/120x120/png',
  },
];

const Certificates: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-indigo-700">Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {mockCertificates.map(cert => (
          <div key={cert.id} className="bg-[#f8fafc] rounded-xl shadow p-6 flex flex-col items-center">
            <img src={cert.imageUrl || ''} alt={cert.name} className="w-24 h-24 object-cover rounded mb-4 border" />
            <div className="text-lg font-semibold text-gray-800 mb-1">{cert.name}</div>
            <div className="text-sm text-gray-500 mb-2">{cert.issuer}</div>
            <div className="text-xs text-gray-400 mb-2">Issued: {cert.issueDate}</div>
            {cert.credentialUrl && (
              <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline text-xs font-medium">View Credential</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates; 