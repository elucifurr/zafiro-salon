// components/Footer.js
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center mb-4 space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-2xl">
            <FaTiktok />
          </a>
        </div>
        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Zafiro Hair and Beauty. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
