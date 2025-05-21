export default function Slider() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-yellow-100 via-white to-cyan-100">
      {/* Sol büyük WELCOME yazısı */}
      <h1 className="absolute left-16 top-1/4 text-[7vw] font-extrabold text-black/10 select-none z-10 hidden md:block">
        WELCOME
      </h1>

      {/* İçerik */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full pl-12 md:pl-32 w-full max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 flex items-center gap-2">
          Hey <span className="text-4xl">👋</span> I'm <span className="text-primary-700">Easton</span>
        </h2>
        <a
          href="#"
          className="text-xl md:text-2xl font-semibold text-primary-700 underline underline-offset-4 mb-8"
        >
          Professional Co
        </a>
        <button className="bg-blue-900 text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-blue-800 transition">
          My Resume
        </button>
      </div>

      {/* Sağda profil ve splash */}
      <div className="absolute right-32 bottom-0 flex items-end z-20">
        {/* Splash efekti */}
        <img
          src="/splash.svg"
          alt="Splash"
          className="absolute right-0 bottom-0 w-[600px] h-[900px] object-contain pointer-events-none select-none"
          style={{ zIndex: 1 }}
        />
        {/* Profil fotoğrafı */}
        <img
          src="/profile.png"
          alt="Profile"
          className="relative w-[340px] h-[440px] object-cover z-10"
          style={{ borderRadius: "0 0 2rem 2rem" }}
        />
      </div>

      {/* Sağ kenarda sosyal medya ikonları */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-30 text-gray-700 text-xl">
        <a href="#" className="hover:text-blue-600 transition">f</a>
        <a href="#" className="hover:text-pink-500 transition">Bē</a>
        <a href="#" className="hover:text-black transition"><span className="text-2xl">⦿</span></a>
      </div>
    </section>
  );
} 