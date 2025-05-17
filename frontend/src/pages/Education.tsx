import { motion } from 'framer-motion'

const Education = () => {
  const educations = [
    {
      id: 1,
      school: "Örnek Üniversitesi",
      degree: "Lisans",
      fieldOfStudy: "Bilgisayar Mühendisliği",
      startDate: "2020-09-01",
      endDate: "2024-06-01",
      description: "Bilgisayar Mühendisliği lisans programı",
      location: "İstanbul",
      gpa: 3.5
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Eğitim</h1>

        <div className="space-y-6">
          {educations.map((education) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{education.school}</h2>
                  <p className="text-gray-600">{education.degree} - {education.fieldOfStudy}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {new Date(education.startDate).getFullYear()} - {new Date(education.endDate).getFullYear()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">{education.location}</p>
                  <p className="text-gray-500 text-sm">GPA: {education.gpa}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">{education.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Education 