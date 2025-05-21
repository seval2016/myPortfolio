import React from 'react';
import Title from '../components/common/Title';
import certificates from '../data/certificates.json';

const Certificates: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <Title subtitle="- CERTIFICATES" title="My Certificates" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {certificates.map(cert => (
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