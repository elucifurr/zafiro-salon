'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 relative">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.svg" // Ruta del logo
            alt="Zafiro Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-2xl font-bold text-gray-800">Zafiro Hair and Beauty</span>
        </Link>
        <div className="hidden lg:flex space-x-6">
          {/* Enlaces de navegación alineados a la derecha */}
          <Link href="#about" className="text-gray-600 hover:text-blue-500 py-2">Sobre Nosotros</Link>
          <Link href="#mechas" className="text-gray-600 hover:text-blue-500 py-2">Mechas</Link>
          <Link href="#services" className="text-gray-600 hover:text-blue-500 py-2">Servicios</Link>
          <Link href="#contact" className="text-gray-600 hover:text-blue-500 py-2">Contacto</Link>
          {/* Botón de reserva */}
          <Link href="https://www.fresha.com/book-now/zafiro-kuufio2y/all-offer?lid=1393036&pId=1322901&hl=es-ES&gei=ZtcTZ-uPELCIxc8P48SN8QM&rwg_token=AJKvS9Vgu-amWamMTDSfKTSLdt9hzjsEUzZlxStzYGoXaOye0kBtTlLerzWEkBxFoF9CH6BAD6QLW0FjssDeClgqLZA9_6sI5A%3D%3D"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition flex items-center justify-center">
            Reserva tu Cita
          </Link>
        </div>
        {/* Botón del menú hamburguesa */}
        <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-md z-50 mt-2">
          <div className="flex flex-col space-y-2 px-4 py-2">
            <div className="flex flex-col items-end space-y-2 w-full">
              <Link href="#about" className="text-gray-600 hover:text-blue-500 text-right">Sobre Nosotros</Link>
              <Link href="#mechas" className="text-gray-600 hover:text-blue-500 text-right">Mechas</Link>
              <Link href="#services" className="text-gray-600 hover:text-blue-500 text-right">Servicios</Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-500 text-right">Contacto</Link>
              <Link href="https://www.fresha.com/book-now/zafiro-kuufio2y/all-offer?lid=1393036&pId=1322901&hl=es-ES&gei=ZtcTZ-uPELCIxc8P48SN8QM&rwg_token=AJKvS9Vgu-amWamMTDSfKTSLdt9hzjsEUzZlxStzYGoXaOye0kBtTlLerzWEkBxFoF9CH6BAD6QLW0FjssDeClgqLZA9_6sI5A%3D%3D"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition flex items-center justify-center self-end">
                Reserva tu Cita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
