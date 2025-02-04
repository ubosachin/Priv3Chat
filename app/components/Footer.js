import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Navigation Links */}
          <ul className="flex space-x-6 text-lg">
            <li><a href="#home" className="hover:text-blue-400 transition-all">Home</a></li>
            <li><a href="#features" className="hover:text-blue-400 transition-all">Features</a></li>
            <li><a href="#plans" className="hover:text-blue-400 transition-all">Plans</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-all">Contact</a></li>
          </ul>
          
          {/* Social Media Links */}
          <div className="flex space-x-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
              <FaGithub />
            </a>
          </div>
        </div>
        
        {/* Copyright Text */}
        <p className="mt-6 text-gray-400">&copy; {new Date().getFullYear()} zkFHE Messenger. All Rights Reserved.</p>
      </div>
    </footer>
  );
}