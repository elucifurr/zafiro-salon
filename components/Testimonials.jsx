// components/Testimonials.js
import CustomTestimonial from './CustomTestimonial';

const testimonialsData = [
  {
    avatar: '/images/avatar1.jpg', // Ruta de la imagen del avatar
    testimonial: '¡El mejor salón en el que he estado! Me encantó el servicio.',
    name: 'María López',
    position: 'Cliente Satisfecha',
  },
  {
    avatar: '/images/avatar2.jpg',
    testimonial: 'Los estilistas son muy profesionales y amables.',
    name: 'Carlos Pérez',
    position: 'Cliente Regular',
  },
  {
    avatar: '/images/avatar3.jpg',
    testimonial: 'Siempre salgo feliz de Zafiro Hair and Beauty.',
    name: 'Ana García',
    position: 'Cliente Fiel',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <CustomTestimonial
              key={index}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
              name={testimonial.name}
              position={testimonial.position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
