import { Link } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineCog6Tooth,
  HiOutlineBriefcase,
  HiOutlineUser,
  HiOutlineDocumentText,
  HiOutlineChatBubbleLeftRight
} from "react-icons/hi2";
import logo from '../assets/logo.png';

const menu = [
  { to: "/", icon: <HiOutlineHome size={32} />, label: "Anasayfa" },
  { to: "/skills", icon: <HiOutlineCog6Tooth size={32} />, label: "Yetenekler" },
  { to: "/projects", icon: <HiOutlineBriefcase size={32} />, label: "Projeler" },
  { to: "/profile", icon: <HiOutlineUser size={32} />, label: "Profil" },
  { to: "/resume", icon: <HiOutlineDocumentText size={32} />, label: "Özgeçmiş" },
  { to: "/contact", icon: <HiOutlineChatBubbleLeftRight size={32} />, label: "İletişim" },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 bg-white shadow flex flex-col items-center z-20">
      <div className="w-16 h-16 mt-4 mb-8 flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>
      <nav className="flex flex-col gap-0 flex-1 justify-center w-full">
        {menu.map((item, i) => (
          <Link
            key={i}
            to={item.to}
            className="group flex justify-center py-4 border-b border-gray-200 border border-t-0 border-l-0 border-r-0 border-[0.5px] text-gray-600 hover:text-primary-600 transition-colors relative overflow-visible"
          >
            {/* İkon */}
            <span
              className="transition-all duration-200 ease-in-out group-hover:opacity-0 group-hover:scale-50"
            >
              {item.icon}
            </span>
            {/* Menü İsmi */}
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 ease-in-out bg-white px-3 py-1 rounded shadow text-sm font-medium pointer-events-none"
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
} 