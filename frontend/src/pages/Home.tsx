import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hoş Geldiniz
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Kişisel portfolyo web siteme hoş geldiniz. Burada eğitim, deneyim, sertifika ve projelerimi bulabilirsiniz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Eğitim</h2>
            <p className="text-gray-600">Eğitim geçmişim ve akademik başarılarım</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Deneyim</h2>
            <p className="text-gray-600">İş deneyimlerim ve profesyonel kariyerim</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Sertifikalar</h2>
            <p className="text-gray-600">Aldığım sertifikalar ve başarılarım</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">Projeler</h2>
            <p className="text-gray-600">Geliştirdiğim projeler ve çalışmalarım</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Home 