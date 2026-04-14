import { Users, Target, Zap, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <SEO 
        title="About Us"
        description="Learn about Shrayu Technologies, a collective of passionate software engineers and designers dedicated to building the digital future since 2025."
        keywords="about Shrayu Technologies, software engineering team, our mission, core values, tech innovation"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            We are <span className="text-blue-600">Shrayu Technologies</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
            Founded in 2025, we are a collective of passionate software engineers, designers, and visionaries dedicated to building the digital future.
          </p>
        </div>

        {/* Our Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Engineering Team" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To empower businesses globally by delivering unparalleled software solutions that drive efficiency, growth, and innovation. We believe in writing code that matters and creating products that make a real-world impact.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Approach</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We combine agile methodologies with deep technical expertise. Whether we are building a custom enterprise platform or scaling a cloud infrastructure, our focus remains on security, performance, and extraordinary user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto bg-blue-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <Target className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600">We never settle for good enough. We strive for technical perfection in every line of code.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto bg-indigo-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <Users className="text-indigo-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaboration</h3>
              <p className="text-slate-600">We win together. Our best work emerges from a culture of open communication and teamwork.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto bg-amber-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <Zap className="text-amber-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-slate-600">We constantly push boundaries, adopting new technologies to solve complex problems faster.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto bg-emerald-100 w-16 h-16 flex items-center justify-center rounded-2xl mb-6">
                <ShieldCheck className="text-emerald-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-slate-600">We build transparent partnerships based on trust, honesty, and reliable delivery.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
