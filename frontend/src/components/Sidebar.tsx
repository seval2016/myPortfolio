import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBriefcase, FaBars, FaTimes} from "react-icons/fa";
import profileImg from '../assets/profile.png';
import menu from '../data/menu.json';

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon - Only mobile */}
      <button
        className="fixed top-8 left-4 z-40 md:hidden bg-white p-2 rounded-full shadow"
        onClick={() => setOpen(true)}
        aria-label="Menüyü Aç"
      >
        <FaBars size={24} />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <aside className="w-72 bg-white min-h-full flex flex-col justify-between items-center px-0 py-12 relative animate-slideInLeft">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-indigo-500"
              onClick={() => setOpen(false)}
              aria-label="Menüyü Kapat"
            >
              <FaTimes size={28} />
            </button>
            <div className="flex flex-col items-center w-full">
              <img src={profileImg} alt="Profile" className="w-24 h-24 rounded-full border-4 border-indigo-100 object-cover" />
              <div className="relative w-full flex flex-col items-center mt-4 mb-10">
                <h2 className="text-xl font-bold text-gray-800 z-10">Seval Şentürk</h2>
                <span className="text-3xl text-indigo-100 font-cursive absolute top-2 left-1/2 -translate-x-1/2 opacity-30 select-none pointer-events-none whitespace-nowrap">Seval Şentürk</span>
      </div>
              <nav className="flex flex-col gap-2 items-center w-full">
        {menu.map((item, i) => (
          <Link
            key={i}
            to={item.to}
                    className={`w-full text-center py-2 text-lg font-medium rounded transition-colors ${location.pathname === item.to ? 'text-indigo-400' : 'text-gray-400 hover:text-indigo-400'}`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col items-center gap-4 mt-10">
              <div className="flex gap-3 mb-2">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full"><FaLinkedin size={20} /></a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full"><FaGithub size={20} /></a>
                <a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full"><FaBriefcase size={20} /></a>
              </div>
              <span className="text-xs text-gray-400 text-center">Copyright ©2022 Seval Şentürk<br />All right reserved.</span>
            </div>
          </aside>
          {/* Kapanınca arka planı tıklayınca da menü kapansın */}
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}

      {/* Sidebar - Only md and up */}
      <aside className="hidden md:flex w-[320px] min-h-screen bg-white flex-col justify-between items-center border-r border-gray-100 px-0 py-12">
        <div className="flex flex-col items-center w-full">
          <img src={profileImg} alt="Profile" className="w-28 h-28 rounded-full border-4 border-indigo-100 object-cover" />
          <div className="relative w-full flex flex-col items-center mt-4 mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 z-10">Seval Şentürk</h2>
            <span className="text-3xl text-indigo-100 font-cursive absolute top-4 left-1/2 -translate-x-1/2 opacity-30 select-none pointer-events-none whitespace-nowrap">Full Stack Developer</span>
          </div>
          <nav className="flex flex-col gap-2 items-center w-full">
            {menu.map((item, i) => (
              <Link
                key={i}
                to={item.to}
                className={`w-full text-center py-2 text-lg font-medium rounded transition-colors ${location.pathname === item.to ? 'text-indigo-400' : 'text-gray-400 hover:text-indigo-400'}`}
            >
              {item.label}
          </Link>
        ))}
      </nav>
        </div>
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="flex gap-3 mb-2">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full"><FaLinkedin size={20} /></a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full"><FaGithub size={20} /></a>
            <a href="https://www.indeed.com/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-indigo-100 p-2 rounded-full"><FaBriefcase size={20} /></a>
          </div>
          <span className="text-xs text-gray-400 text-center">Copyright ©2022 Seval Şentürk<br />All right reserved.</span>
        </div>
    </aside>
    </>
  );
} 