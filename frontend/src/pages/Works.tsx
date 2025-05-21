import { motion } from 'framer-motion';
import ProjectCard from '../common/ProjectCard';
import projectsData from '../data/projects.json';

export default function Works() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Başlık */}
        <div className="mb-8">
          <span className="text-xs text-gray-400 tracking-widest font-semibold">- PROJECTS</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2">Recent completed work</h1>
        </div>
        {/* Proje kartları grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsData.projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  );
} 