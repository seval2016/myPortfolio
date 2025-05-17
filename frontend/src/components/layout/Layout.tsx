import Footer from './Footer'
import Sidebar from '../Sidebar'
import Slider from '../Slider'

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow">
          <Slider />
          {/* Diğer sayfalar için aşağıdaki satırı aktif bırakabilirsin: */}
          {/* <Outlet /> */}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout 