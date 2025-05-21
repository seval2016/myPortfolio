import { motion } from 'framer-motion';
import ServiceCard from '../common/ServiceCard';

const services = [
  {
    number: '01',
    title: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet, solar adipiscing elit. Non nisl'
  },
  {
    number: '02',
    title: 'UI/UX',
    desc: 'Lorem ipsum dolor sit amet, solar adipiscing elit. Non nisl'
  },
  {
    number: '03',
    title: 'Mobile Application',
    desc: 'Lorem ipsum dolor sit amet, solar adipiscing elit. Non nisl'
  },
  {
    number: '04',
    title: 'User Research',
    desc: 'Lorem ipsum dolor sit amet, solar adipiscing elit. Non nisl'
  },
  {
    number: '05',
    title: 'Animation',
    desc: 'Lorem ipsum dolor sit amet, solar adipiscing elit. Non nisl'
  },
  {
    number: '06',
    title: 'Game Development',
    desc: 'Lorem ipsum dolor sit amet, solar adipiscing elit. Non nisl'
  },
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white"
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-10 md:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-2 sm:gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs text-gray-400 tracking-widest font-semibold">- SERVICES</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2">My Services</h1>
          </div>
          <a href="mailto:info@elisc.com" className="text-sm font-bold text-indigo-900 underline self-center sm:self-auto mt-2 sm:mt-0">info@elisc.com</a>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-16">
          {services.map((service, i) => (
            <ServiceCard key={i} {...service} />
          ))}
        </div>
        {/* Video kutusu */}
        <div className="w-full aspect-video rounded-xl overflow-hidden relative group shadow max-w-full sm:max-w-3xl mx-auto">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" alt="intro video" className="w-full h-full object-cover" />
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-indigo-700 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-lg transition">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 20 20"><path d="M6.5 5.5v9l7-4.5-7-4.5z" /></svg>
          </button>
          <span className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 bg-white/80 text-gray-900 text-xs font-semibold px-2 sm:px-3 py-1 rounded shadow">INTRO VIDEO</span>
        </div>
      </div>
    </motion.div>
  );
} 