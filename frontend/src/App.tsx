import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Services from './pages/Services'
import Works from './pages/Works'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'
import Education from './pages/Education'

// Swiper'ın CSS dosyalarını global olarak import et (linter hatası almamak için dinamik import)
// @ts-ignore
import('swiper/css');
// @ts-ignore
import('swiper/css/navigation');

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/services" element={<Services />} />
              <Route path="/works" element={<Works />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Toaster position="top-right" />
    </QueryClientProvider>
  )
}

export default App
