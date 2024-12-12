'use client';

import { motion } from 'framer-motion';

const About2 = () => {
  const salon = [
    { src: '/images/salon1.webp', alt: 'Recepción' },
    { src: '/images/salon2.webp', alt: 'Spa' },
    { src: '/images/salon3.webp', alt: 'Tocador' },
    { src: '/images/salon4.webp', alt: 'Zona de espera' }
  ];

  return (
    <section id="about" className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Animated text */}
          <motion.div 
            className="lg:w-2/5 mb-6 lg:mb-0 pr-10"
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

          {/* Animated images */}
          <motion.div 
            className="lg:w-3/5 mb-6 lg:mb-0 mt-4"
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-6">
              {salon.map((image, index) => (
                <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-2/3 lg:w-2/5 xl:w-2/5 min-w-[200px]"> {/* Adjust min-width as needed */}
                  <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                    <div className="relative w-full" style={{ aspectRatio: '4 / 3' }}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About2;