import { useState, useEffect } from 'react';
import { Code, Smartphone, Cloud, Shield, Database, Server, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { API_BASE_URL } from '../config/api.config';

// Icon mapping helper with premium styling
const IconHelper = ({ name, className }) => {
  const icons = {
    Code: <Code className={className} />,
    Smartphone: <Smartphone className={className} />,
    Cloud: <Cloud className={className} />,
    Shield: <Shield className={className} />,
    Database: <Database className={className} />,
    Server: <Server className={className} />
  };
  return icons[name] || <Code className={className} />;
};

const Services = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/services`);
        const result = await response.json();
        
        if (result.success) {
          setServicesList(result.data);
        } else {
          setError('Failed to fetch services.');
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError('Error connecting to our secure servers.');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const iconColors = [
    'text-blue-600 bg-blue-50',
    'text-indigo-600 bg-indigo-50',
    'text-teal-600 bg-teal-50',
    'text-purple-600 bg-purple-50',
    'text-rose-600 bg-rose-50',
    'text-sky-600 bg-sky-50'
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-20 pb-24">
      <SEO 
        title="Our Services"
        description="Premium software engineering and digital transformation services. From enterprise web systems to AI integration, Shrayu Technologies delivers excellence."
        keywords="enterprise software, custom code, clod native, AI integration, Shrayu Technologies"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Expertise</h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            We deliver exceptional software engineering and consulting services to help enterprises innovate, scale, and succeed in a digital-first world.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin"></div>
              <div className="mt-4 text-slate-400 font-medium text-center">Loading expertise...</div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center text-rose-500 bg-white p-10 rounded-3xl max-w-lg mx-auto shadow-xl border border-rose-100 mt-10">
            <div className="bg-rose-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-rose-500" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">Connection Interrupted</h3>
            <p className="mb-8 text-slate-600 leading-relaxed">{error}</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
            >
              Retry Connection
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {servicesList.map((service, index) => {
              const colorInfo = iconColors[index % iconColors.length];
              const [textColor, bgColor] = colorInfo.split(' ');
              
              return (
                <div 
                  key={service._id || index} 
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 group flex flex-col h-full relative overflow-hidden"
                >
                  <div className={`absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <ExternalLink className={`h-5 w-5 ${textColor}`} />
                  </div>
                  
                  <div className={`${bgColor} w-20 h-20 flex items-center justify-center rounded-[1.5rem] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3`}>
                    <IconHelper name={service.iconName} className={`h-10 w-10 ${textColor}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light mb-8 flex-grow">
                    {service.description}
                  </p>

                  <Link 
                    to="/contact" 
                    className={`inline-flex items-center font-bold text-sm uppercase tracking-widest ${textColor} group/btn`}
                  >
                    <span>Consult Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        {!loading && !error && (
          <div className="mt-24 text-center">
            <div className="bg-slate-900 text-white p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20"></div>
               <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20"></div>
               
               <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to start your digital journey?</h2>
               <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                 Our technical architects are standing by to help you map out your next enterprise solution.
               </p>
               <Link 
                 to="/contact" 
                 className="inline-flex items-center px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-blue-600/40 relative z-10"
               >
                 Book a Discovery Call
                 <ArrowRight className="ml-2 h-6 w-6" />
               </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
