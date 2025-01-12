import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top: Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-400">
              Zafiro Hair and Beauty es un salón Redken en el que apostamos por el cuidado del cabello utilizando los mejores productos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#mechas" className="text-gray-400 hover:text-white">
                  Mechas
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
              <p>C. Federico García Lorca, 5, Bajo, 11140 Conil de la Frontera, Cádiz</p>
              <p>
                Teléfono:
                <Link
                  href="tel:+674343524"
                  className="hover:underline ml-1"
                  aria-label="Llamar a +34 674 34 35 24"
                >
                  +34 674 34 35 24
                </Link>
              </p>
            </div>

            {/* "Diseñado por RediseñoSEO" Link */}
            <p className="mt-4">
              <span>Diseñado por </span>
              <Link
                href="https://rediseñoseo.com"
                className="text-indigo-500 hover:text-indigo-400 font-semibold"
                aria-label="Visitar RediseñoSEO"
              >
                RediseñoSEO
              </Link>
            </p>
          </div>
        </div>

        {/* Footer Bottom: Social Media & Copyright */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/zafirohairandbeauty"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Instagram de Zafiro Hair and Beauty"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566585353275"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="Facebook de Zafiro Hair and Beauty"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@zafirohairandbeauty"
              className="text-gray-400 hover:text-white text-2xl"
              aria-label="TikTok de Zafiro Hair and Beauty"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center md:text-right">
            &copy; {new Date().getFullYear()} Zafiro Hair and Beauty. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;