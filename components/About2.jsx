'use client'; // Asegura que todo este componente se renderice del lado del cliente

import Image from 'next/image';
import { motion } from 'framer-motion';

const About2 = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Animación para el texto */}
          <motion.div 
            className="lg:w-2/6 mb-6 lg:mb-0 pr-10"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center lg:text-left text-gray-800 mb-4">El Salón</h2>
            <p className="text-lg text-gray-700 mb-4">
              En Zafiro Hair and Beauty, te ofrecemos una experiencia única y relajante en un espacio moderno y acogedor. 
              Nuestro salón está diseñado con un ambiente cálido y elegante, 
              pensado para que disfrutes cada momento mientras cuidamos de tu cabello.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nos enfocamos en crear looks personalizados, utilizando técnicas innovadoras que realzan tu estilo y personalidad. 
              Ya sea que busques un cambio de imagen o un tratamiento de belleza, 
              en Zafiro te garantizamos una experiencia renovadora que hará que te sientas y te veas espectacular.
            </p>
            <p className="text-lg text-gray-700">
              Ven y descubre cómo podemos ayudarte.
              ¡Te esperamos en nuestro salón!
            </p>
          </motion.div>

          {/* Animación para las imágenes */}
          <motion.div 
            className="lg:w-3/5 mb-6 lg:mb-0 mt-4"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Imagen 1 */}
              <div className="relative w-full sm:h-48 lg:h-96">
              <Image
                  src="/images/salon1.png"
                  alt="Salon 1"
                  fill
                  className="rounded-lg shadow-lg object-cover w-full h-full" // Asegura que ocupe todo el contenedor
                />
              </div>
              <div className="relative w-full lg:h-96 sm:h-48">
                <Image
                  src="/images/salon2.png"
                  alt="Salon 2"
                  fill
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
              <div className="relative w-full lg:h-96 sm:h-48">
                <Image
                  src="/images/salon3.png"
                  alt="Salon 3"
                  fill
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
              <div className="relative w-full lg:h-96 sm:h-48">
                <Image
                  src="/images/salon4.png"
                  alt="Salon 4"
                  fill
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About2;
