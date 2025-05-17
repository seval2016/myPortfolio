import { motion } from 'framer-motion'

const Skill = () => {
  const skills = [
    {
      id: 1,
      name: "React",
      category: "Frontend",
      level: 90,
      description: "Modern web uygulamaları geliştirme",
      icon: "https://example.com/react-icon.png"
    },
    {
      id: 2,
      name: "Node.js",
      category: "Backend",
      level: 85,
      description: "Sunucu tarafı uygulama geliştirme",
      icon: "https://example.com/nodejs-icon.png"
    },
    {
      id: 3,
      name: "TypeScript",
      category: "Programming Language",
      level: 80,
      description: "Tip güvenli JavaScript geliştirme",
      icon: "https://example.com/typescript-icon.png"
    }
  ]

  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Yetenekler</h1>

        {categories.map((category) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <div className="flex items-start">
                      {skill.icon && (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 object-contain mr-4"
                        />
                      )}
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                        <p className="text-gray-600 mt-1">{skill.description}</p>
                        <div className="mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="bg-primary-600 h-2.5 rounded-full"
                            />
                          </div>
                          <p className="text-gray-500 text-sm mt-1">{skill.level}%</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Skill 