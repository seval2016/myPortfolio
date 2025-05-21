import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Skills from './pages/Skill'
import MyProjects from './pages/MyProjects'
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
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/myProjects" element={<MyProjects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/certificates" element={<Certificates />} />
              
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
