import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Layers,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BarChart3,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import { useTheme } from '../context/ThemeContext';
import { useSkeleton } from '../context/SkeletonContext';
import SkeletonWrapper from '../components/skeleton/SkeletonWrapper';
import PortfolioSkeleton from '../components/skeleton/PortfolioSkeleton';

const Products = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const { isDark } = useTheme();
  const { isLoading } = useSkeleton();

  const caseStudies = [
    {
      id: 'nexus',
      title: 'Shrayu Nexus CRM Engine',
      category: 'SaaS Platform & Enterprise Logic',
      techStack: ['Next.js', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
      shortDesc: 'A high-performance CRM engine using real-time behavioral pipelines to analyze customer touchpoints.',
      challenge: 'Legacy sales portals suffered slow database queries and failed to predict customer conversion signals in real-time.',
      solution: 'We engineered Shrayu Nexus with a microservices architecture. It streams user activities over WebSockets and runs predictive pipeline modeling on the server edge.',
      impact: '68% faster lead ingestion & +24.8% increase in deal conversion rates',
      github: 'https://github.com/shrayutech',
      demo: '#',
      visualType: 'dashboard'
    },
    {
      id: 'ledgercore',
      title: 'LedgerCore Engine',
      category: 'Open Source FinTech Core',
      techStack: ['Go', 'gRPC', 'Redis', 'Kafka', 'Docker'],
      shortDesc: 'An ultra-low latency transaction reconciliation engine featuring cryptographically signed audit logs.',
      challenge: 'High-volume payment networks face race conditions and synchronization delays across regional database instances.',
      solution: 'Constructed a Go-based transaction ledger processing up to 10,000 transactions per second, syncing database records through Redis pipelines and Kafka streams.',
      impact: '0 reconciliation mismatches across 10,000 tx/sec continuous stress tests',
      github: 'https://github.com/shrayutech',
      demo: '#',
      visualType: 'code'
    },
    {
      id: 'decentraspace',
      title: 'Decentraspace Portal',
      category: 'Web Platform & Concept Design',
      techStack: ['React', 'Framer Motion', 'Web3.js', 'Ethers.js', 'Solidity'],
      shortDesc: 'A glassmorphic portfolio management portal representing automated asset tracking.',
      challenge: 'Interacting with decentralized multi-chain accounts is visually overwhelming and lacks direct asset performance insights.',
      solution: 'We crafted an immersive glassmorphic interface built on top of Ethers.js. It visualizes portfolio balances across chains using interactive SVG sparklines and custom CSS variables.',
      impact: 'Sub-100ms multi-chain wallet data sync & unified gas fee estimation',
      github: 'https://github.com/shrayutech',
      demo: '#',
      visualType: 'design'
    },
    {
      id: 'velocdn',
      title: 'VeloCDN Engine',
      category: 'Edge Infrastructure Project',
      techStack: ['Rust', 'WebAssembly', 'Cloudflare Workers', 'Redis'],
      shortDesc: 'An edge cache distribution system targeting content invalidation in under 150ms.',
      challenge: 'Standard global CDNs take minutes to distribute static assets or update edge parameters globally.',
      solution: 'A CDN script built in Rust and compiled to WebAssembly. It runs at the edge inside Cloudflare Workers, fetching key-value data instantly.',
      impact: '150ms global cache invalidation time across worldwide nodes',
      github: 'https://github.com/shrayutech',
      demo: '#',
      visualType: 'terminal'
    }
  ];

  const toggleExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
    } else {
      setExpandedProject(id);
    }
  };

  return (
    <SkeletonWrapper loading={isLoading} skeleton={<PortfolioSkeleton />}>
      <div className="relative min-h-screen bg-portfolio-atmosphere pt-36 pb-32 px-6 sm:px-8 overflow-hidden transition-colors duration-300">
        <SEO
          title="Portfolio & Case Studies"
          description="Discover Shrayu Technologies software engineering case studies, technical architecture solutions, and open-source contributions."
          keywords="case studies, software engineering portfolio, Go backend, Rust CDN, Next.js SaaS, microservices architecture"
        />

        {/* ATMOSPHERE OVERLAYS */}
        <div className="absolute inset-0 bg-blueprint-mesh opacity-20 pointer-events-none"></div>
        <div className="absolute inset-0 noise-overlay pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-20">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-4 py-1.5 rounded-full text-blue-500 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg shadow-blue-500/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Showcase</span>
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Case Studies &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
                Engineering Work
              </span>
            </h1>
            <p className={`text-base sm:text-lg font-medium leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Real-world technical solutions, open-source projects, and high-performance system architectures built by our engineering team.
            </p>
          </div>

          {/* Case Study List */}
          <div className="space-y-10">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="glass-card-3d rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 sm:p-10 items-center">
                  {/* Visual Preview Window (Left 5 Cols) */}
                  <div className="lg:col-span-5 w-full">
                    {study.visualType === 'dashboard' && (
                      <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5 font-sans text-slate-300 text-xs space-y-4 shadow-2xl">
                        <div className="flex justify-between items-center pb-3 border-b border-slate-700">
                          <div className="flex space-x-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                          </div>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">nexus-crm</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3.5 bg-[#111827] rounded-xl space-y-1 border border-slate-800">
                            <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wider block">Lead Conversion</span>
                            <span className="text-base font-extrabold text-white">+24.8%</span>
                          </div>
                          <div className="p-3.5 bg-[#111827] rounded-xl space-y-1 border border-slate-800">
                            <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wider block">Active Pipeline</span>
                            <span className="text-base font-extrabold text-blue-400">18 Active</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {study.visualType === 'code' && (
                      <div className="bg-[#090d16] border border-slate-800 rounded-2xl p-5 font-mono text-[11px] text-slate-300 leading-relaxed shadow-2xl overflow-hidden">
                        <div className="flex justify-between items-center mb-3 border-b border-slate-800 pb-2 text-[10px]">
                          <span className="text-slate-400 font-bold">reconcile.go</span>
                          <span className="text-green-400 font-semibold">Go Core</span>
                        </div>
                        <div className="space-y-1.5">
                          <div><span className="text-purple-400">func</span> <span className="text-blue-400">Reconcile</span>(tx *Transaction) &#123;</div>
                          <div>  log := crypt.<span className="text-indigo-400">Sign</span>(tx.<span className="text-slate-300">Hash</span>)</div>
                          <div>  db.<span className="text-indigo-400">Save</span>(tx)</div>
                          <div>&#125;</div>
                        </div>
                      </div>
                    )}

                    {study.visualType === 'design' && (
                      <div className="bg-gradient-to-tr from-blue-900 to-indigo-900 border border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center space-y-3 shadow-2xl text-center h-40">
                        <Layers className="w-9 h-9 text-cyan-400 animate-pulse" />
                        <div className="space-y-1">
                          <span className="text-white font-bold text-sm">Automated Gas Optimizer</span>
                          <span className="text-slate-300 text-xs block font-medium">Interactive Web3 Wallet UI</span>
                        </div>
                      </div>
                    )}

                    {study.visualType === 'terminal' && (
                      <div className="bg-[#030712] border border-slate-800 rounded-2xl p-5 font-mono text-[11px] text-emerald-400 leading-relaxed shadow-2xl overflow-hidden">
                        <div className="flex space-x-1.5 mb-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                        </div>
                        <div>$ cargo build --release</div>
                        <div className="text-slate-400">   Compiling velocdn-engine v1.0.0</div>
                        <div className="text-slate-400">    Finished release target in 2.45s</div>
                        <div>$ ./velocdn-engine --port 8080</div>
                        <div className="text-blue-400">[info] Edge server active. Latency: 14ms.</div>
                      </div>
                    )}
                  </div>

                  {/* Case Study Details (Right 7 Cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs text-blue-500 font-bold uppercase tracking-wider block">
                        {study.category}
                      </span>
                      <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{study.title}</h2>
                      <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                        {study.shortDesc}
                      </p>
                    </div>

                    {/* Business Impact Box */}
                    <div className={`p-4 rounded-2xl flex items-center space-x-3 font-bold text-xs border ${
                      isDark
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                        : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    }`}>
                      <BarChart3 className="w-5 h-5 shrink-0" />
                      <span>Business Impact: {study.impact}</span>
                    </div>

                    {/* Technology badges */}
                    <div className="flex flex-wrap gap-2">
                      {study.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider border ${
                            isDark
                              ? 'bg-white/5 border-white/10 text-slate-300'
                              : 'bg-slate-100 border-slate-200 text-slate-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4 pt-2">
                      <button
                        onClick={() => toggleExpand(study.id)}
                        className="btn-secondary text-xs font-bold px-4 py-2.5 rounded-xl flex items-center space-x-2"
                      >
                        <span>Architecture Deep Dive</span>
                        {expandedProject === study.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>

                      <a
                        href={study.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                          isDark
                            ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                            : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-200'
                        }`}
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {study.demo !== '#' && (
                        <a
                          href={study.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                            isDark
                              ? 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                              : 'bg-slate-100 border border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-200'
                          }`}
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Collapsible Architecture Details */}
                <AnimatePresence>
                  {expandedProject === study.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`border-t overflow-hidden ${
                        isDark
                          ? 'border-white/10 bg-black/40'
                          : 'border-slate-200 bg-slate-50/80'
                      }`}
                    >
                      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-2">
                          <h3 className="text-blue-500 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5">
                            <ShieldCheck className="w-4 h-4" />
                            <span>The Challenge Solved</span>
                          </h3>
                          <p className={`leading-relaxed text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{study.challenge}</p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-indigo-500 font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5">
                            <Layers className="w-4 h-4" />
                            <span>The Engineering Solution</span>
                          </h3>
                          <p className={`leading-relaxed text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{study.solution}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default Products;
