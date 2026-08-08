import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Code,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  Network,
  Layers,
  Settings,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();

  const serviceCategories = [
    {
      title: 'Custom Software',
      icon: <Code className="w-8 h-8 text-blue-500" />,
      tagline: 'Enterprise Core Logic',
      desc: 'Robust, secure business logic engines tailored to your specific organizational workflows. Built for high availability, security, and low latency.',
      techs: ['Node.js', 'NestJS', 'PostgreSQL', 'Go', 'Python'],
      features: ['Microservices Architecture', 'Secure Data Ingestion', 'Automated Testing Pipelines', 'Legacy System Migrations']
    },
    {
      title: 'Web Applications',
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      tagline: 'Responsive Web Portals',
      desc: 'Sleek, responsive, and SEO-optimized frontend interfaces integrated with flexible state management and rapid page load speeds.',
      techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'GraphQL'],
      features: ['Server-Side Rendering (SSR)', 'SEO Best Practices', 'Responsive Layout Systems', 'State Hydration & Caching']
    },
    {
      title: 'Mobile Apps',
      icon: <Smartphone className="w-8 h-8 text-cyan-500" />,
      tagline: 'Handheld Experiences',
      desc: 'High-fidelity mobile applications designed to perform natively on iOS and Android devices, featuring smooth animations and offline support.',
      techs: ['Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
      features: ['Offline Data Syncing', 'Push Notification Routing', 'Dynamic Local Storage', 'Native Device Feature Access']
    },
    {
      title: 'AI Solutions',
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      tagline: 'Cognitive Engineering',
      desc: 'Integrate LLMs, natural language processing models, custom recommendation algorithms, predictive analytics, and deep learning into your workflows.',
      techs: ['Python', 'OpenAI API', 'PyTorch', 'TensorFlow', 'LangChain'],
      features: ['LLM Orchestration & RAG', 'Semantic Vector Databases', 'Behavioral Pattern Analysis', 'AI Agent Workflows']
    },
    {
      title: 'Cloud Infrastructure',
      icon: <Cloud className="w-8 h-8 text-sky-500" />,
      tagline: 'Auto-Scaling Clusters',
      desc: 'Robust infrastructure deployed across multi-cloud regions with auto-scaling groups, containerization, and geo-redundant backups.',
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      features: ['Infrastructure as Code (IaC)', 'Multi-Region Orchestration', 'Cost Optimization Metrics', 'High Availability Deployments']
    },
    {
      title: 'UI/UX Design',
      icon: <Palette className="w-8 h-8 text-rose-500" />,
      tagline: 'Visual Prototypes',
      desc: 'Intuitive user research, sleek design tokens, wireframes, and design systems crafted to ensure high retention and modern aesthetics.',
      techs: ['Figma', 'Prototyping', 'Design Systems', 'User Research'],
      features: ['Component Library Design', 'A/B Layout Prototyping', 'Accessibility Compliance (WCAG)', 'Motion & Micro-interactions']
    },
    {
      title: 'API Development',
      icon: <Network className="w-8 h-8 text-emerald-500" />,
      tagline: 'Data Exchange Layers',
      desc: 'Ultra-fast API design featuring middleware authentication, rate-limiting layers, real-time streams, and self-documenting endpoints.',
      techs: ['NestJS', 'Express.js', 'Swagger', 'GraphQL', 'gRPC'],
      features: ['OAuth2 / JWT Security', 'Rate Limiting & Throttling', 'Real-time WebSocket Streams', 'Swagger / OpenAPI Specs']
    },
    {
      title: 'SaaS Development',
      icon: <Layers className="w-8 h-8 text-violet-500" />,
      tagline: 'Multi-Tenant Platforms',
      desc: 'End-to-end SaaS application scaffolding featuring Stripe subscription models, user seats, tenant isolation, and activity logs.',
      techs: ['Next.js', 'Stripe', 'Supabase', 'Clerk', 'PostgreSQL'],
      features: ['Tenant Schema Isolation', 'Tiered Subscriptions', 'Seat Management Metrics', 'Unified Billing Portals']
    },
    {
      title: 'DevOps & CI/CD',
      icon: <Settings className="w-8 h-8 text-amber-500" />,
      tagline: 'Delivery Pipelines',
      desc: 'Automate software delivery pipelines, log collection metrics, container orchestration, and real-time infrastructure alerts.',
      techs: ['GitHub Actions', 'Terraform', 'Prometheus', 'Grafana', 'Docker'],
      features: ['Zero-Downtime Releases', 'Real-Time Health Monitoring', 'Secrets Handling', 'Performance Alerting']
    }
  ];

  return (
    <div className="relative min-h-screen bg-services-atmosphere pt-36 pb-32 px-6 sm:px-8 overflow-hidden transition-colors duration-300">
      <SEO
        title="Services"
        description="Explore Shrayu Technologies software engineering expertise: Custom Software, Web Apps, Mobile Apps, AI Solutions, Cloud Infrastructure, UI/UX, APIs, SaaS, and DevOps."
        keywords="custom software development, web applications, mobile app development, AI solutions, SaaS development, cloud infrastructure"
      />

      {/* MULTI-LAYERED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 noise-overlay pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Capabilities</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Our Software Development{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
              Services
            </span>
          </h1>
          <p className={`text-base sm:text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            We deliver exceptional software engineering services to help startups and growing businesses innovate, scale, and succeed in a digital-first world.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="glass-card-3d rounded-3xl p-8 flex flex-col justify-between space-y-8"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-100 border border-slate-200'}`}>
                    {service.icon}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                    isDark ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-blue-700 bg-blue-50 border-blue-200'
                  }`}>
                    {service.tagline}
                  </span>
                </div>

                <div className="space-y-3">
                  <h2 className={`text-2xl font-bold transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h2>
                  <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {service.desc}
                  </p>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-center space-x-2 text-xs font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`space-y-5 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-md font-bold text-[10px] uppercase border ${
                        isDark
                          ? 'bg-white/5 text-slate-300 border-white/10'
                          : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 text-xs text-blue-500 font-bold hover:text-blue-600 transition-colors uppercase tracking-widest group"
                >
                  <span>Consult Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="pt-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-tr from-blue-900 via-[#0B1021] to-indigo-900 border border-white/15 text-white p-12 sm:p-16 text-center shadow-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Ready to Start Your Project?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
              Schedule a consultation with our software architects. We will help map your requirements into a scalable technical roadmap.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="btn-primary text-white font-bold text-base px-8 py-4 rounded-full inline-flex items-center space-x-2 border border-blue-400/30 shadow-lg shadow-blue-500/25"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
