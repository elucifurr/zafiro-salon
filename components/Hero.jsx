// components/Hero.js
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col lg:flex-row items-center p-8 h-full bg-gray-50">
      <div className="text-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-6xl font-bold text-gray-800 leading-tight">
          Zafiro Hair and Beauty
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Salón especializado en Mechas
        </p>
        <div className="flex justify-center items-center space-x-6 mt-4">
          <a href="https://www.instagram.com/zafirohairandbeauty" className="text-gray-400 hover:text-pink-300 text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61566585353275" className="text-gray-400 hover:text-blue-400 text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://www.tiktok.com/@zafirohairandbeauty" className="text-gray-400 hover:text-gray-700 text-2xl">
            <FaTiktok />
          </a>
        </div>
        <Link href="https://www.fresha.com/book-now/zafiro-kuufio2y/all-offer?lid=1393036&pId=1322901&hl=es-ES&gei=ZtcTZ-uPELCIxc8P48SN8QM&rwg_token=AJKvS9Vgu-amWamMTDSfKTSLdt9hzjsEUzZlxStzYGoXaOye0kBtTlLerzWEkBxFoF9CH6BAD6QLW0FjssDeClgqLZA9_6sI5A%3D%3D" 
        className="mt-6 inline-block bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-md">
          Reserva tu Cita
        </Link>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/images/balayage.png" // Asegúrate de que la ruta de la imagen sea correcta
          alt="Balayage"
          width={700} // Aumenta el tamaño según sea necesario
          height={400}
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
