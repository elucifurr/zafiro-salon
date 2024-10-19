import Link from "next/link";

// components/Contact.js
const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contacto</h2>
        
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Información de contacto y horario (izquierda) */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 text-gray-700 text-center" >
            <h3 className="text-xl font-semibold mb-4">Horario del Salón</h3>
            <ul className="mb-6">
              <li className="font-semibold">Martes a Viernes:</li>
              <li>9:00 - 14:00 <br /> 16:00 - 20:00</li>
              <li className="font-semibold">Sábados:</li>
              <li>9:00 - 14:00</li>
              <li className="font-semibold">Lunes y Domingos:</li>
              <li>Cerrado</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <p>C/ Federico García Lorca 5, 11140 Conil de la Frontera, Cádiz</p>
            <p>Teléfono: <Link href="tel:+674343524" className="text-blue-600 hover:underline ml-1">+34 674 34 35 24</Link></p>

            {/* Botón de reserva */}
            <Link 
              href="https://www.fresha.com/book-now/zafiro-kuufio2y/all-offer?lid=1393036&pId=1322901&hl=es-ES&gei=ZtcTZ-uPELCIxc8P48SN8QM&rwg_token=AJKvS9Vgu-amWamMTDSfKTSLdt9hzjsEUzZlxStzYGoXaOye0kBtTlLerzWEkBxFoF9CH6BAD6QLW0FjssDeClgqLZA9_6sI5A%3D%3D" 
              className="inline-block mt-4 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Reserva tu cita
            </Link>
          </div>

          {/* Mapa (derecha) */}
          <div className="lg:w-2/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4380.295649023142!2d-6.087286704449026!3d36.278497630850396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c3947e3ba48d3%3A0x4c8ffb3c2d636bb4!2sZafiro%20Hair%20and%20Beauty!5e0!3m2!1ses!2ses!4v1729360538032!5m2!1ses!2ses"              className="w-full h-96 rounded-md shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
