// components/CustomService.js
import Image from 'next/image';

const CustomService = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="relative w-full h-80 mb-2 overflow-hidden custom-service shadow-md">
        <Image
          src={image}
          alt={title}
          layout="fill" // Esto asegura que la imagen ocupe todo el contenedor
          className="rounded-md object-cover" // Mantiene el redondeo en las esquinas
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CustomService;
