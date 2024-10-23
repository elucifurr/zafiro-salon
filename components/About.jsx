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
              Soy Carmen Guerrero, fundadora de Zafiro Hair and Beauty, y la pasión por el arte del cabello ha sido siempre mi motor. 
              He tenido la suerte de formarme y trabajar con algunas de las técnicas más innovadoras en Madrid,
              un centro de tendencias donde perfeccioné mi enfoque en mechas y estilos personalizados. 
              Mi experiencia en la capital me permitió no solo mejorar mis habilidades, 
              sino también desarrollar una sensibilidad única hacia las necesidades individuales de cada cliente.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Lo que más me apasiona son las mechas, especialmente las técnicas personalizadas que resaltan la belleza natural del cabello.
              Desde mechas balayage hasta estilos más creativos, mi objetivo es que cada cliente salga con un look que realmente exprese su personalidad y estilo único. 
              Cada detalle en el proceso es importante para mí: desde la elección de los tonos hasta la aplicación precisa del color, 
              siempre con el compromiso de lograr resultados que realcen la belleza natural de cada persona.
            </p>
            <p className="text-lg text-gray-700">
              En Zafiro, no solo busco transformar el cabello, sino crear una experiencia memorable, 
              donde cada visita sea un reflejo de mi dedicación y amor por el mundo de la peluquería.
            </p>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
