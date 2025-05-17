import { motion } from 'framer-motion'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Web Sitesi",
      description: "Kişisel portfolyo web sitesi projesi",
      imageUrl: "https://example.com/portfolio.png",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com/username/portfolio",
      liveUrl: "https://portfolio.example.com",
      startDate: "2024-01-01",
      endDate: "2024-03-01",
      featured: true
    },
    {
      id: 2,
      title: "E-Ticaret Uygulaması",
      description: "Modern e-ticaret platformu",
      imageUrl: "https://example.com/ecommerce.png",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/username/ecommerce",
      liveUrl: "https://ecommerce.example.com",
      startDate: "2023-09-01",
      endDate: "2023-12-01",
      featured: false
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Projeler</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {project.imageUrl && (
                <div className="relative h-48">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-primary-600 text-white px-2 py-1 rounded text-sm">
                      Öne Çıkan
                    </div>
                  )}
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    {new Date(project.startDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })} - 
                    {new Date(project.endDate).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long' })}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700"
                      >
                        Canlı Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Project 