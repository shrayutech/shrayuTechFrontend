import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#02050D] text-slate-400 pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group w-max">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 p-1 group-hover:scale-105 group-hover:border-blue-500/40 transition-all duration-300 shadow-md shadow-blue-500/10">
                <img
                  src="/logo.png"
                  alt="Shrayu Technologies Logo"
                  className="w-full h-full object-contain filter drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-none group-hover:text-blue-400 transition-colors">
                  Shrayu
                </span>
                <span className="text-[10px] text-blue-400 font-bold tracking-[0.2em] uppercase mt-1">
                  Technologies
                </span>
              </div>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed text-sm font-medium">
              We help startups, small businesses, and enterprise clients transform ambitious software product visions into scalable digital platforms through clean code engineering, AI integrations, and exceptional user experience design.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://github.com/shrayutech"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/20 transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayushkhobragade"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/20 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-600/20 transition-all duration-300 shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Company</h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-blue-400 transition-colors">
                  Case Studies & Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Services</h3>
            <ul className="space-y-3.5 text-sm font-medium">
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Web & Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-400 transition-colors">
                  Cloud & DevOps
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-widest uppercase mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-sm">
                  <a
                    href="tel:+917020046141"
                    className="hover:text-white transition-colors cursor-pointer hover:underline"
                  >
                    +91 70200 46141
                  </a>
                  <span className="hidden sm:inline text-slate-500">/</span>
                  <a
                    href="tel:+919359514760"
                    className="hover:text-white transition-colors cursor-pointer hover:underline"
                  >
                    +91 93595 14760
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 shrink-0" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=shrayutech@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors cursor-pointer hover:underline"
                >
                  shrayutech@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-slate-500">
          <p>&copy; {new Date().getFullYear()} Shrayu Technologies. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 items-center">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-blue-600/30 transition-all duration-300 flex items-center justify-center shadow-sm"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
