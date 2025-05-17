export default function Slider() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center text-center"
      style={{
        backgroundImage: "url('/slider-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginLeft: "5rem", // Sidebar genişliği kadar boşluk bırak
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white"
        />
        <h1 className="text-4xl font-bold text-white mb-2">CRISTINO.</h1>
        <h2 className="text-xl text-white mb-4">Flask Personal Portfolio Template</h2>
        <div className="flex justify-center gap-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">View Demos</button>
          <button className="border border-red-500 text-white px-6 py-2 rounded hover:bg-red-500 hover:text-white transition">Download now</button>
        </div>
      </div>
      {/* Alt kısımda ikonlar */}
      <div className="flex gap-6 mt-10">
        <img src="/flask-icon.png" alt="Flask" className="w-12 h-12 bg-white rounded-full p-2 shadow" />
        <img src="/bootstrap-icon.png" alt="Bootstrap" className="w-12 h-12 bg-white rounded-full p-2 shadow" />
        <img src="/html5-icon.png" alt="HTML5" className="w-12 h-12 bg-white rounded-full p-2 shadow" />
        <img src="/sass-icon.png" alt="Sass" className="w-12 h-12 bg-white rounded-full p-2 shadow" />
        <img src="/css3-icon.png" alt="CSS3" className="w-12 h-12 bg-white rounded-full p-2 shadow" />
      </div>
    </section>
  );
} 