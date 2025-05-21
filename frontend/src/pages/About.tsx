import { motion } from 'framer-motion';
import StatBox from '../common/StatBox';
import ExperienceCard from '../common/ExperienceCard';

const stats = [
  { value: '10+', label: 'YEARS OF EXPERIENCE', color: 'bg-green-100', text: 'text-green-700' },
  { value: '50+', label: 'PROJECT COMPLETED', color: 'bg-orange-100', text: 'text-orange-700' },
  { value: '30+', label: 'HAPPY CLIENTS', color: 'bg-indigo-100', text: 'text-indigo-700' },
];

const experiences = [
  { year: '2018 - Present', title: 'Web Developer', company: 'Envato', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { year: '2018 - Present', title: 'Web Developer', company: 'Envato', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { year: '2018 - Present', title: 'Web Developer', company: 'Envato', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  { year: '2018 - Present', title: 'Web Developer', company: 'Envato', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-white"
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 sm:py-12">
        {/* Üst kısım */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="flex-1 mb-6 md:mb-0">
            <span className="text-xs text-gray-400 tracking-widest font-semibold">- NICE TO MEET YOU!</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-2">Robert Elisc</h1>
            <h2 className="text-base sm:text-lg text-indigo-400 font-semibold mb-4">Web Designer & Developer</h2>
            <button className="bg-indigo-900 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold shadow hover:bg-indigo-800 transition text-sm sm:text-base">Download CV</button>
          </div>
          <div className="flex-1 flex flex-col gap-2 text-gray-500 text-sm sm:text-base">
            <p>Hello there! My name is <span className="text-indigo-500 font-semibold">John Smith</span>. I am a web designer & developer, and I'm very passionate and dedicated to my work.</p>
            <p>With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
            <div className="flex flex-wrap gap-4 sm:gap-6 mt-4 text-xs sm:text-sm font-semibold">
              <div>AGE <br /><span className="text-gray-900 text-base sm:text-lg">25</span></div>
              <div>BORN IN <br /><span className="text-gray-900 text-base sm:text-lg">Florida, USA</span></div>
              <div>MAIL <br /><span className="text-gray-900 text-base sm:text-lg">info@elisc.com</span></div>
              <div>CALL <br /><span className="text-gray-900 text-base sm:text-lg">(+987) 987 654 321</span></div>
            </div>
          </div>
        </div>
        {/* İstatistik kutuları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-16">
          {stats.map((stat, i) => (
            <StatBox key={i} {...stat} />
          ))}
        </div>
        {/* Deneyim kartları */}
        <div className="bg-[#f3f7fd] rounded-xl p-4 sm:p-8">
          <span className="text-xs text-gray-400 tracking-widest font-semibold">- EXPERIENCE</span>
          <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8 mt-2">Everything about me !</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
} 