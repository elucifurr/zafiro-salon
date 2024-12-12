import MechaCard from './MechaCard';

const MechasSection = () => {
  const mechas = [
    {
      imageSrc: '/images/balayage2.webp',
      title: 'Balayage',
      description: 'Mechas que crean un efecto natural y luminoso, aportando dimensión y movimiento a tu cabello. Perfectas para un look radiante y de bajo mantenimiento.'
    },
    {
      imageSrc: '/images/babylights.webp',
      title: 'Babylights',
      description: 'Mechas delicadas que iluminan tu rostro con un toque sutil, ideales para un acabado fresco y juvenil.'
    },
    {
      imageSrc: '/images/mechas-fantasia.webp',
      title: 'Balayage Fantasía',
      description: 'Dale vida a tu look con mechas vibrantes y creativas que combinan tonos intensos en un elegante degradado. Expresa tu personalidad única, añadiendo originalidad a tu cabello.'
    },
    {
      imageSrc: '/images/morena-iluminada.webp',
      title: 'Balayage Morena Iluminada',
      description: 'Mechas que realzan el cabello oscuro con reflejos cálidos, creando un efecto luminoso y sofisticado.'
    },
    {
      imageSrc: '/images/balayage-contour1.webp',
      title: 'Balayage Contour',
      description: 'Mechas estratégicamente colocadas que definen y enmarcan tu rostro, añadiendo luz y dimensión con un acabado natural.'
    },
    {
      imageSrc: '/images/money-piece2.webp',
      title: 'Mechas Money Piece',
      description: 'Un toque atrevido en la parte frontal que ilumina tu rostro, creando un contraste vibrante que destaca tus rasgos.'
    },
    {
      imageSrc: '/images/puntos-luz-balayage.webp',
      title: 'Color + Balayage Puntos de Luz',
      description: 'Un estilo innovador que mezcla color y balayage, aportando profundidad y luminosidad en un acabado personalizado.'
    },
    {
      imageSrc: '/images/puntos-luz2.webp',
      title: 'Color + Mechas Puntos de Luz',
      description: 'Mechas que iluminan con sutileza, perfectas para dar un toque fresco y renovado a tu look.'
    },
    {
      imageSrc: '/images/underlights-red.webp',
      title: 'Mechas Underlights',
      description: 'Un juego de colores atrevido en la parte inferior, creando un contraste sorprendente y moderno que destaca tu estilo.'
    },
    {
      imageSrc: '/images/chunky-orange.webp',
      title: 'Mechas Chunky',
      description: 'Mechas gruesas y atrevidas que aportan un toque de color intenso, perfectas para quienes buscan un look llamativo y original.'
    },
  ];

  return (
    <section id="mechas" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Mechas</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {mechas.map((mecha, index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
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