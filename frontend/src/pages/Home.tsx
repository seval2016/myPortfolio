import { motion } from 'framer-motion'
import profileImg from '../assets/profile.png'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50"
    >
      {/* Sol boşluk Sidebar için */}
      <div className="hidden md:block w-[320px]" />
      {/* Ana içerik */}
      <div className="flex flex-1 items-center justify-center px-4 py-8 md:pl-0 md:pr-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-12 md:gap-16">
          {/* Sol: Başlık ve açıklama */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm <span className="text-indigo-500">Elisc!</span><br />
                <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  Creative Designer
                </span><br />
                Based in <span className="relative">
                  Florida
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-indigo-300/30 -z-10"></span>
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                I'm a Florida based web designer &amp; front end developer with{' '}
                <span className="text-indigo-500 font-semibold">10+ years</span> of experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto justify-center md:justify-start">
                <button className="group relative px-8 py-4 rounded-xl font-semibold overflow-hidden transition-all duration-300 bg-white border-2 border-indigo-500 text-indigo-500 hover:text-white">
                  <span className="relative z-10">Got a project?</span>
                  <div className="absolute inset-0 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
                <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Download CV
                </button>
              </div>
              <div className="flex flex-col gap-2 mt-4 border-l-4 border-indigo-400 pl-6 items-center md:items-start">
                <span className="text-base text-gray-700 font-medium hover:text-indigo-500 transition-colors cursor-pointer">+77 022 444 05 05</span>
                <span className="text-base text-gray-700 font-medium hover:text-indigo-500 transition-colors cursor-pointer">support@elisc.com</span>
                <span className="text-base text-indigo-500 font-medium">Ave Street Avenue, New York</span>
              </div>
            </motion.div>
          </div>
          {/* Sağ: Profil ve dekoratif elementler */}
          <div className="flex-1 flex items-center justify-center relative mt-8 md:mt-0">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              {/* Dekoratif arka plan şekli */}
              <svg
                width="380"
                height="380"
                viewBox="0 0 380 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-0 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]"
                style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                <path d="M190 0C295.228 0 380 84.7715 380 190C380 295.228 295.228 380 190 380C84.7715 380 0 295.228 0 190H190V0Z" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="380" y2="380" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#818CF8" />
                    <stop offset="1" stopColor="#6366F1" />
                  </linearGradient>
                </defs>
              </svg>
              <img
                src={profileImg}
                alt="Profile"
                className="w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] rounded-full object-cover relative z-10 border-8 border-white shadow-2xl"
              />
              {/* Dekoratif elementler */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 z-20"
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 0L22.3607 13.6393L36 16L22.3607 18.3607L20 32L17.6393 18.3607L4 16L17.6393 13.6393L20 0Z" fill="#6366F1" fillOpacity="0.2"/>
                </svg>
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 z-20"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="15" stroke="#6366F1" strokeWidth="2" strokeOpacity="0.2"/>
                  <path d="M16 8V16L20 20" stroke="#6366F1" strokeWidth="2" strokeOpacity="0.2"/>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home 