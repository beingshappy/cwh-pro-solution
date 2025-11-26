import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-nexpro-dark border-t border-nexpro-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-nexpro-orange to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <div className="text-xl font-jakarta font-bold text-white">NexPro</div>
                <div className="text-xs text-gray-400">SOLUTION</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 font-inter">
              Your trusted partner for comprehensive IT solutions and 24/7 support services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-nexpro-orange rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-nexpro-orange rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-nexpro-orange rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-nexpro-orange rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-jakarta font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Data Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Network Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">24/7 Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-jakarta font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3 font-inter">
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexpro-orange transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-jakarta font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 font-inter">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-nexpro-orange mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Business Ave, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-nexpro-orange mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-nexpro-orange mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@nexpro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-nexpro-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 font-inter">
              2025 NexPro Solution. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-nexpro-orange text-sm transition-colors font-inter">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-nexpro-orange text-sm transition-colors font-inter">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-nexpro-orange text-sm transition-colors font-inter">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
