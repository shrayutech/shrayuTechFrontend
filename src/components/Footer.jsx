import { Link } from 'react-router-dom';
import { Code2, Github, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Shrayu Technologies</span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses through cutting-edge software solutions and innovative products. We turn your ideas into digital reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-blue-600"><Twitter className="h-5 w-5" /></a>
              <a href="https://www.linkedin.com/in/ayushkhobragade" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-blue-600"><Linkedin className="h-5 w-5" /></a>
              <a href="https://github.com/shrayutech" className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full hover:bg-blue-600"><Github className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              {/* <li><Link to="/products" className="hover:text-blue-400 transition-colors">Our Products</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {/* <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 shrink-0" />
                <span>123 Tech Boulevard, Innovation District, CA 94043</span>
              </li> */}
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                <span>+91 {702004614}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                <span>shrayutech@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Newsletter</h3>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for the latest tech news and updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Shrayu Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
