// components/Services.jsx
import CustomService from './CustomService';

const servicesData = [
  {
    title: "Alisados",
    description: "Consigue un cabello liso y sedoso con nuestros alisados a base de Ácido Hialurónico, perfectos para un look elegante y sin frizz.",
    image: "/images/alisado.png",
  },
  {
    title: "Barros Botánicos",
    description: "Da color a tu cabello con nuestros barros botánicos, diseñados para aportar brillo y suavidad mientras cuidan tu salud capilar.",
    image: "/images/barros.png",
  },
  {
    title: "Tratamiento Perla Reparadora - Nutritiva",
    description: "Devuelve la vitalidad a tu cabello con nuestro tratamiento más completo, que nutre o repara tu cabello",
    image: "/images/perla.png",
  },
  {
    title: "Tratamiento Spa Cuero Cabelludo",
    description: "Disfruta de una experiencia relajante y revitalizante con nuestro tratamiento spa, diseñado para purificar y tratar tu cuero cabelludo.",
    image: "/images/tratamiento-spa.png",
  },
  {
    title: "Peinados Especiales",
    description: "Destaca en cualquier evento con nuestros peinados especiales, diseñados para realzar tu belleza y personalidad en ocasiones únicas.",
    image: "/images/peinado.png",
  },
  {
    title: "Maquillaje",
    description: "Realza tu belleza con nuestro servicio de maquillaje, que combina técnicas profesionales y productos de alta calidad para un acabado impecable.",
    image: "/images/maquillaje.png",
  },
  
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
