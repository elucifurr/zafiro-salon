// components/Services.jsx
import CustomService from './CustomService';

const servicesData = [
  {
    title: "Mechas Balayage",
    description: "Transforma tu look con nuestras mechas balayage personalizadas.",
    image: "/images/balayage2.png", // Ruta de la imagen
  },
  {
    title: "Mechas Fantasía",
    description: "Cortes modernos y estilizados para todos los gustos.",
    image: "/images/mechas-fantasia.png", // Ruta de la imagen
  },
  {
    title: "Tratamientos Capilares",
    description: "Dale vida a tu cabello con nuestros tratamientos de color.",
    image: "/images/tratamiento.png", // Ruta de la imagen
  },
  {
    title: "Barros Botánicos",
    description: "Un estilo único para cada ocasión.",
    image: "/images/barros.png", // Ruta de la imagen
  },
  {
    title: "Peinados Especiales",
    description: "Peinados para eventos y ocasiones especiales.",
    image: "/images/peinado.png", // Ruta de la imagen
  },
  {
    title: "Maquillaje",
    description: "Tratamientos de hidratación y nutrición para el cabello.",
    image: "/images/maquillaje.png", // Ruta de la imagen
  },
  // Añade más servicios según sea necesario
];

const Services = () => {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Servicios Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <CustomService
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
