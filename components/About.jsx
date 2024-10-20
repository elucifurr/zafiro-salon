// components/About.js
'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';


const About = () => {
  return (
    <section id="about" className="py-12 bg-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">

        <motion.div 
            className="lg:w-1/2 mb-6 lg:mb-0"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
          <div className=" mb-6 lg:mb-0">
            <Image
              src="/images/carmen.png" // Ruta de la imagen
              alt="Zafiro Hair and Beauty"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover mb-6 lg:mb-0"
            />
          </div>
        </motion.div>

        <motion.div 
            className="lg:w-1/2 mb-6 lg:mb-0"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold text-center lg:text-left text-gray-800 mb-4">Sobre mí</h2>
            <p className="text-lg text-gray-700 mb-4">
              En Zafiro Hair and Beauty, nuestra pasión es resaltar la belleza de cada cliente.
              Con un equipo de estilistas expertos, ofrecemos una amplia gama de servicios,
              incluyendo mechas balayage, tratamientos de color, y cortes de cabello personalizados.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nuestro compromiso es proporcionar una experiencia única y relajante,
              donde cada visita se convierte en un momento de autocuidado y renovación.
            </p>
            <p className="text-lg text-gray-700">
              Ven y descubre cómo podemos ayudarte a realzar tu belleza natural.
              ¡Te esperamos en nuestro salón!
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
