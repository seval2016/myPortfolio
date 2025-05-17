import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Portfolio</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Ana Sayfa</Link>
            <Link to="/profile" className="text-gray-600 hover:text-gray-900">Profil</Link>
            <Link to="/education" className="text-gray-600 hover:text-gray-900">Eğitim</Link>
            <Link to="/experience" className="text-gray-600 hover:text-gray-900">Deneyim</Link>
            <Link to="/certificates" className="text-gray-600 hover:text-gray-900">Sertifikalar</Link>
            <Link to="/skills" className="text-gray-600 hover:text-gray-900">Yetenekler</Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">Projeler</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">İletişim</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Ana Sayfa</Link>
            <Link to="/profile" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Profil</Link>
            <Link to="/education" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Eğitim</Link>
            <Link to="/experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Deneyim</Link>
            <Link to="/certificates" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Sertifikalar</Link>
            <Link to="/skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Yetenekler</Link>
            <Link to="/projects" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Projeler</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">İletişim</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar 