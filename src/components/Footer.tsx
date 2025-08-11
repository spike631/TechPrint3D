import React from 'react';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                TechPrint3D
              </span>
            </div>
            <p className="text-gray-400">
              Professionele 3D printing services voor makers en tech-liefhebbers. 
              Van prototype tot productie.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Snelle Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Diensten</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#upload" className="text-gray-400 hover:text-cyan-400 transition-colors">Upload</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">PLA Printing</span></li>
              <li><span className="text-gray-400">PETG Printing</span></li>
              <li><span className="text-gray-400">ABS Printing</span></li>
              <li><span className="text-gray-400">Design Optimalisatie</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-400">info@techprint3d.be</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-400">+32 479 443 910</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span className="text-gray-400">Houthalen-Helchteren, België</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 TechPrint3D. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;