import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Code,
  Layers,
  Zap,
  Sparkles,
  GitBranch,
  Linkedin,
  Github
} from 'lucide-react';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const values = [
    {
      title: 'Technical Perfection',
      desc: 'We compile, debug, refactor, and profile continuously to deliver clean, standard-compliant codebases.',
      icon: <Code className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Absolute Transparency',
      desc: 'No fake claims, no bloated metrics. We communicate transparently about architectural choices, milestones, and costs.',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-500" />
    },
    {
      title: 'Startup Agility',
      desc: 'We iterate rapidly, deploy continuously, and adjust roadmap targets dynamically to suit shifting market opportunities.',
      icon: <Zap className="w-6 h-6 text-cyan-500" />
    },
    {
      title: 'Scalable Architectures',
      desc: 'Every system we deploy is structured using stateless patterns, ready to handle traffic spikes smoothly from day one.',
      icon: <Layers className="w-6 h-6 text-purple-500" />
    }
  ];

  const team = [
    {
      name: 'Ayush Khobragade',
      role: 'Founder & Tech Lead',
      bio: 'Full-stack software architect specializing in distributed Go backends, Next.js web engines, AI integrations, and cloud infrastructure.',
      linkedin: 'https://www.linkedin.com/in/ayushkhobragade',
      github: 'https://github.com/shrayutech',
      initials: 'AK'
    },
    {
      name: 'Sarthak Dhumal',
      role: 'Co-Founder & UI/UX Architect',
      bio: 'Product designer focusing on human-centered interaction guidelines, modern visual design systems, accessibility, and sleek web interfaces.',
      linkedin: 'https://www.linkedin.com/in/sarthak-dhumal-07555a211/',
      github: 'https://github.com/Saru2248',
      initials: 'SD'
    }
  ];

  const roadmap = [
    { phase: 'Q1 2026', title: 'Open Source Scaffolding', desc: 'Deploying custom CLI scaffolding tools for modular backend layouts.' },
    { phase: 'Q2 2026', title: 'AI Integration Utilities', desc: 'Releasing lightweight RAG connectors for local vector databases.' },
    { phase: 'Q3 2026', title: 'Shrayu Cloud Beta', desc: 'Launching automated docker deployment clusters matching modern deployment platforms.' }
  ];

  return (
    <div className="relative min-h-screen bg-about-atmosphere pt-36 pb-32 px-6 sm:px-8 overflow-hidden transition-colors duration-300">
      <SEO
        title="About Us"
        description="Learn about Shrayu Technologies story, mission, vision, tech philosophy, core values, development roadmap, and engineering team."
        keywords="about us, tech philosophy, development roadmap, core values, engineering team"
      />

      {/* ATMOSPHERE OVERLAYS */}
      <div className="absolute inset-0 bg-blueprint-mesh opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 noise-overlay pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-24">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-blue-500/10">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Origin & Philosophy</span>
          </div>
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            We Engineer{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
              Clean Digital Systems
            </span>
          </h1>
          <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Shrayu Technologies is a modern software engineering startup dedicated to building high-quality digital products, websites, mobile applications, and custom software.
          </p>
        </div>

        {/* Story & Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Who We Are
            </h2>
            <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Shrayu Technologies was founded with a single objective: to engineer clean, maintainable software products that scale seamlessly. We eliminate unnecessary corporate management layers and focus directly on technical craftsmanship, transparent communication, and rapid execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border-l-4 border-blue-500 shadow-sm ${isDark ? 'bg-white/5 border-r border-t border-b border-white/10' : 'bg-white border-r border-t border-b border-slate-200'}`}>
                <span className="text-[10px] text-blue-500 font-extrabold uppercase tracking-wider block mb-1">Our Vision</span>
                <span className={`text-xs font-semibold leading-relaxed block ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Making high-performance software engineering accessible to growing businesses.
                </span>
              </div>
              <div className={`p-4 rounded-2xl border-l-4 border-indigo-500 shadow-sm ${isDark ? 'bg-white/5 border-r border-t border-b border-white/10' : 'bg-white border-r border-t border-b border-slate-200'}`}>
                <span className="text-[10px] text-indigo-500 font-extrabold uppercase tracking-wider block mb-1">Our Mission</span>
                <span className={`text-xs font-semibold leading-relaxed block ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  Delivering clean, secure, and fully documented codebases on time.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="glass-card-3d rounded-3xl p-8 space-y-6 shadow-2xl">
              <h3 className={`text-lg font-bold flex items-center space-x-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                <GitBranch className="w-5 h-5 text-blue-500" />
                <span>Our Tech Philosophy</span>
              </h3>
              <ul className="space-y-4 text-xs font-semibold">
                <li className={`flex items-center space-x-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shrink-0"></div>
                  <span>Prefer functional purity & modular architecture.</span>
                </li>
                <li className={`flex items-center space-x-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full shrink-0"></div>
                  <span>Minimize runtime dependencies to ensure optimal performance.</span>
                </li>
                <li className={`flex items-center space-x-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full shrink-0"></div>
                  <span>Deploy stateless APIs optimized for multi-region scale.</span>
                </li>
                <li className={`flex items-center space-x-3 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <div className="w-2.5 h-2.5 bg-purple-500 rounded-full shrink-0"></div>
                  <span>Maintain comprehensive OpenAPI specs and documentation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-12">
          <h2 className={`text-2xl sm:text-3xl font-black text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="glass-card-3d rounded-3xl p-8 space-y-4"
              >
                <div className={`p-3.5 rounded-2xl w-max ${isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-100 border border-slate-200'}`}>
                  {val.icon}
                </div>
                <h3 className={`font-bold text-lg ${isDark ? 'text-white' : 'text-slate-900'}`}>{val.title}</h3>
                <p className={`text-xs leading-relaxed font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="space-y-12 text-center">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Meet the Team</h2>
            <p className={`text-sm font-semibold ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              A passionate team building exceptional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="glass-card-3d rounded-3xl p-8 space-y-6 flex flex-col justify-between items-center text-center"
              >
                <div className="space-y-4 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-blue-500/25 border-2 border-white/20">
                    {member.initials}
                  </div>
                  <div className="space-y-1">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                    <span className="text-xs text-blue-500 font-bold uppercase tracking-wider block">
                      {member.role}
                    </span>
                  </div>
                  <p className={`text-xs font-semibold leading-relaxed max-w-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    {member.bio}
                  </p>
                </div>

                <div className="flex space-x-3 pt-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40'
                        : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300'
                    }`}
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isDark
                        ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40'
                        : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-blue-50 hover:border-blue-300'
                    }`}
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Roadmap Section */}
        <div className={`pt-12 border-t space-y-12 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <h2 className={`text-2xl sm:text-3xl font-black text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Future Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((item, idx) => (
              <div
                key={idx}
                className="glass-card-3d rounded-3xl p-8 space-y-4"
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                  isDark ? 'text-blue-400 bg-blue-500/10 border-blue-500/20' : 'text-blue-700 bg-blue-50 border-blue-200'
                }`}>
                  {item.phase}
                </span>
                <h3 className={`font-bold text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`text-xs font-semibold leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
