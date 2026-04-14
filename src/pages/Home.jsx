import { ArrowRight, Code, Server, Smartphone, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <SEO
        title="Home"
        description="Shrayu Technologies - Expert software development company building digital reality through custom web apps, mobile development, and cloud solutions."
        keywords="software development, web design, mobile apps, Shrayu Technologies, cloud services, tech consulting"
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 right-0 -translate-y-12 -translate-x-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed font-light">
              Premium software engineering services and cutting-edge products designed to accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/50 flex items-center group w-full sm:w-auto justify-center">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/products" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-semibold text-lg transition-all w-full sm:w-auto justify-center flex">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-lg text-slate-600">Enterprise-grade solutions tailored to your unique business challenges across every platform.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Code className="text-blue-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Web Apps</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Scalable, secure, and beautiful web applications built with modern frontend frameworks and robust backend microservices.
              </p>
              <Link to="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-indigo-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Smartphone className="text-indigo-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Development</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Native and cross-platform mobile experiences that delight users and perform flawlessly on iOS and Android devices.
              </p>
              <Link to="/services" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
              <div className="bg-teal-100 w-14 h-14 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                <Server className="text-teal-600 h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Infrastructure</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Cloud-native architecture design, DevOps automation, and scalable infrastructure deployment on AWS, Azure, or GCP.
              </p>
              <Link to="/services" className="text-teal-600 font-medium flex items-center hover:text-teal-800">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {/* <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Flagship Ecosystem</h2>
              <p className="text-lg text-slate-400">Innovative, industry-specific software products designed to scale with your ambition.</p>
            </div>
            <Link to="/products" className="group flex items-center text-blue-400 hover:text-blue-300 font-medium mt-6 md:mt-0">
              View all products <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"> */}
      {/* Product 1 */}
      {/* <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 flex flex-col sm:flex-row group hover:border-blue-500/30 transition-all duration-500">
              <div className="sm:w-2/5 md:w-1/2 p-10 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-4xl font-black text-white tracking-tighter">NX</span>
                </div>
              </div>
              <div className="p-8 sm:w-3/5 md:w-1/2 flex flex-col justify-center">
                <span className="text-blue-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">AI-Powered CRM</span>
                <h3 className="text-2xl font-bold mb-3 text-white">Shrayu Nexus</h3>
                <p className="text-slate-400 mb-6 text-sm font-light leading-relaxed">Predict behavioral patterns and automate high-conversion sales cycles with deep learning.</p>
                <Link to="/products" className="inline-flex items-center text-white hover:text-blue-400 text-sm font-bold transition-colors w-max group/link">
                  <ExternalLink className="h-4 w-4 mr-2" /> 
                  <span>Explore Platform</span>
                </Link>
              </div>
            </div> */}

      {/* Product 2 */}
      {/* <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 flex flex-col sm:flex-row group hover:border-emerald-500/30 transition-all duration-500">
              <div className="sm:w-2/5 md:w-1/2 p-10 bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <span className="text-4xl font-black text-white tracking-tighter">SL</span>
                </div>
              </div>
              <div className="p-8 sm:w-3/5 md:w-1/2 flex flex-col justify-center">
                <span className="text-emerald-400 font-bold text-[10px] tracking-[0.2em] uppercase mb-2">Financial Engine</span>
                <h3 className="text-2xl font-bold mb-3 text-white">Shrayu Ledger</h3>
                <p className="text-slate-400 mb-6 text-sm font-light leading-relaxed">Ultra-secure reconciliation engine featuring real-time fraud detection and compliance mapping.</p>
                <Link to="/products" className="inline-flex items-center text-white hover:text-emerald-400 text-sm font-bold transition-colors w-max group/link">
                  <ExternalLink className="h-4 w-4 mr-2" /> 
                  <span>Explore Platform</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Trust & CTA Section */}
      <section className="relative py-28 overflow-hidden bg-slate-900 text-white">
        {/* Background Gradients & Textures */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDE0bDItLTItMS4zMi44YTEgMSAwIDAgMSAxLjMyaDEwaDJsMCAxem0xIDQuNTdsMS42OC0xLjg0YTEgMSAwIDAgMCAxLjMyTDBoMTB2Mkgwem0tMS05SDAiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCkiLz4KPC9zdmc+')] bg-repeat opacity-50"></div>
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Glow inside the card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-blue-500/20 to-transparent"></div>

            <div className="relative z-20">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                Join innovative companies that trust us to deliver exceptional software solutions on time and on budget.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-14">
                <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
                  <CheckCircle2 className="h-10 w-10 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold text-white">Agile Methodology</span>
                </div>
                <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
                  <CheckCircle2 className="h-10 w-10 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold text-white">Dedicated Teams</span>
                </div>
                <div className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm group">
                  <CheckCircle2 className="h-10 w-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-lg font-semibold text-white">Ongoing Support</span>
                </div>
              </div>

              <Link to="/contact" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-full font-bold text-lg hover:scale-105 transition-all inline-block shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] border border-blue-500/30">
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
