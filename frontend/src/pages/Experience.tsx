import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Örnek Şirket",
      position: "Yazılım Geliştirici",
      startDate: "2023-06-01",
      endDate: null,
      description: "Full-stack web uygulamaları geliştirme",
      location: "İstanbul",
      employmentType: "Tam Zamanlı",
      companyWebsite: "https://example.com",
      companyLogo: null,
      currentlyWorking: true
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Deneyim</h1>

        <div className="space-y-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{experience.company}</h2>
                  <p className="text-gray-600">{experience.position}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(experience.startDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })} - 
                    {experience.currentlyWorking ? 'Devam Ediyor' : new Date(experience.endDate!).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{experience.location}</p>
                  <p className="text-gray-500 text-sm">{experience.employmentType}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">{experience.description}</p>
              {experience.companyWebsite && (
                <a
                  href={experience.companyWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 mt-2 inline-block"
                >
                  Şirket Web Sitesi
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Experience 