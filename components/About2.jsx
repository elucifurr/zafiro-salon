// components/About2.js
import Image from 'next/image';

const About2 = () => {
  return (
    <section id="about" className="py-12 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-2/6 mb-6 lg:mb-0 pr-10"> {/* Ajustado a 2/6 y se agregó un margen derecho */}
            <h2 className="text-4xl font-bold text-center lg:text-left text-gray-800 mb-4">El Salón</h2>
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
          <div className="lg:w-3/5 mb-6 lg:mb-0 mt-4"> {/* Ajustado a 3/5 y se agregó margen superior */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-80">
                <Image
                  src="/images/salon1.png" // Ruta de la primera imagen
                  alt="Salon 1"
                  layout="fill" // Permite que la imagen ocupe todo el contenedor
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/salon2.png" // Ruta de la segunda imagen
                  alt="Salon 2"
                  layout="fill"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/salon3.png" // Ruta de la tercera imagen
                  alt="Salon 3"
                  layout="fill"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/salon4.png" // Ruta de la cuarta imagen
                  alt="Salon 4"
                  layout="fill"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
