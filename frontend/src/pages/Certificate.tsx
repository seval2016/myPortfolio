import { motion } from 'framer-motion'

const Certificate = () => {
  const certificates = [
    {
      id: 1,
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      issueDate: "2024-01-01",
      expiryDate: "2027-01-01",
      credentialId: "AWS-123456",
      credentialUrl: "https://aws.amazon.com/certification/",
      imageUrl: "https://example.com/certificate.png"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sertifikalar</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex flex-col h-full">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{certificate.name}</h2>
                  <p className="text-gray-600">{certificate.issuer}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(certificate.issueDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })} - 
                    {new Date(certificate.expiryDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    Sertifika ID: {certificate.credentialId}
                  </p>
                </div>
                <div className="mt-4 flex-grow">
                  {certificate.imageUrl && (
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  )}
                </div>
                <div className="mt-4">
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700"
                  >
                    Sertifikayı Görüntüle
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Certificate 