// components/MechasSection.js
import MechaCard from './MechaCard';

const MechasSection = () => {
  const mechas = [
    {
      imageSrc: '/images/balayage.png',
      title: 'Balayage',
      description: 'Mechas suaves que imitan el efecto del sol, ideales para un look natural y luminoso.'
    },
    {
      imageSrc: '/images/balayage2.png',
      title: 'Babylights',
      description: 'Mechas finas que aportan luz y frescura al rostro, perfectas para un toque sutil.'
    },
    {
      imageSrc: '/images/mechas-fantasia.png',
      title: 'Ombré',
      description: 'Un degradado elegante que va de oscuro a claro, creando un contraste impresionante.'
    },
    {
      imageSrc: '/images/mechas-fantasia.png',
      title: 'Ombré',
      description: 'Un degradado elegante que va de oscuro a claro, creando un contraste impresionante.'
    },
    {
      imageSrc: '/images/balayage.png',
      title: 'Babylights',
      description: 'Mechas finas que aportan luz y frescura al rostro, perfectas para un toque sutil.'
    },
    {
      imageSrc: '/images/balayage2.png',
      title: 'Ombré',
      description: 'Un degradado elegante que va de oscuro a claro, creando un contraste impresionante.'
    },
    {
      imageSrc: '/images/balayage2.png',
      title: 'Ombré',
      description: 'Un degradado elegante que va de oscuro a claro, creando un contraste impresionante.'
    },
    {
      imageSrc: '/images/mechas-fantasia.png',
      title: 'Babylights',
      description: 'Mechas finas que aportan luz y frescura al rostro, perfectas para un toque sutil.'
    },
    {
      imageSrc: '/images/balayage.png',
      title: 'Ombré',
      description: 'Un degradado elegante que va de oscuro a claro, creando un contraste impresionante.'
    },
    {
      imageSrc: '/images/balayage.png',
      title: 'Ombré',
      description: 'Un degradado elegante que va de oscuro a claro, creando un contraste impresionante.'
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Mechas</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {mechas.map((mecha, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"> {/* Ajusta el ancho aquí */}
              <MechaCard
                imageSrc={mecha.imageSrc}
                title={mecha.title}
                description={mecha.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechasSection;
