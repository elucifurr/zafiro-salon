const MechaCard = ({ imageSrc, title, description }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <div className="relative h-96">
        <img
          src={imageSrc}
          alt={`Mecha de tipo ${title}`}
          className="object-cover w-full h-full rounded-lg"
          loading="lazy" 
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