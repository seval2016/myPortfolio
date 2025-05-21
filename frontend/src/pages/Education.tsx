import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full flex flex-col gap-4"
    >
      <h1 className="text-4xl font-bold">Eğitim</h1>
      <div className="flex flex-col gap-4">
        {/* Eğitim bilgilerinizi buraya ekleyebilirsiniz */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Üniversite Adı</h2>
          <p className="text-gray-600">Bölüm</p>
          <p className="text-gray-500">2019 - 2023</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education; 