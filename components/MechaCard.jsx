// components/MechaCard.js
import Image from 'next/image';

const MechaCard = ({ imageSrc, title, description }) => {
  return (
    <div className="overflow-hidden bg-white"> {/* Contenedor sin bordes redondeados */}
      <div className="relative h-96"> {/* Aumenta la altura según tus necesidades */}
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-lg shadow-lg" // Bordes redondeados solo en la imagen
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default MechaCard;
