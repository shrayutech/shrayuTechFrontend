import { Briefcase, MapPin, Clock, ArrowRight, HeartPulse, GraduationCap, Laptop, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-Time",
      description: "Looking for an experienced engineer proficient in React, Node.js, and cloud architecture to lead our core product team."
    },
    {
      id: 2,
      title: "Product Designer (UI/UX)",
      department: "Design",
      location: "Remote (Global)",
      type: "Full-Time",
      description: "Join our design team to craft beautiful, intuitive, and user-centric interfaces for our flagship SaaS products."
    },
    {
      id: 3,
      title: "DevOps specialist",
      department: "Infrastructure",
      location: "New York, NY (On-site)",
      type: "Full-Time",
      description: "Scale our AWS infrastructure, automate CI/CD pipelines, and ensure 99.99% uptime for enterprise clients."
    },
    {
      id: 4,
      title: "Technical Project Manager",
      department: "Management",
      location: "Remote (US Only)",
      type: "Contract",
      description: "Coordinate cross-functional development teams, manage agile sprints, and act as a liaison between stakeholders and engineering."
    }
  ];

  const benefits = [
    {
      icon: <HeartPulse className="h-8 w-8 text-rose-500" />,
      title: "Healthcare & Wellness",
      description: "Premium medical, dental, and vision coverage for you and your dependents, plus mental health stipends."
    },
    {
      icon: <Laptop className="h-8 w-8 text-blue-500" />,
      title: "Remote Work & Setup",
      description: "$2,000 work-from-home stipend to build your perfect home office, and flexible hybrid options."
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-amber-500" />,
      title: "Learning & Growth",
      description: "Dedicated annual budget for courses, conferences, and unlimited access to learning platforms."
    },
    {
      icon: <Plane className="h-8 w-8 text-emerald-500" />,
      title: "Unlimited PTO",
      description: "We focus on outcomes, not hours. Take the time you need to recharge, travel, and spend time with loved ones."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <SEO 
        title="Careers"
        description="Join Shrayu Technologies and help us build the digital future. Explore open positions in engineering, design, and product management."
        keywords="careers at Shrayu Technologies, job openings, software engineering jobs, UI/UX design jobs, tech careers"
      />
      {/* Hero Section */}
      <div className="bg-slate-900 text-white py-24 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Build the Future With Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Join a culture of continuous innovation. We are looking for brilliant minds to help us solve the world's most complex technical challenges.
          </p>
          <a href="#positions" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/50">
            View Open Positions
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Shrayu Technologies?</h2>
            <p className="text-lg text-slate-600">We invest heavily in our team. Your well-being and professional growth are our top priorities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                <div className="bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div id="positions" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Open Positions</h2>
              <p className="text-slate-600">Shape the next generation of enterprise software.</p>
            </div>
            <div className="mt-4 md:mt-0 text-slate-500 text-sm font-medium">
              Showing {openPositions.length} available roles
            </div>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                      {job.department}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:space-x-4 text-slate-500 text-sm mb-4">
                    <span className="flex items-center mt-1 sm:mt-0"><MapPin className="h-4 w-4 mr-1 text-slate-400" /> {job.location}</span>
                    <span className="flex items-center mt-1 sm:mt-0"><Clock className="h-4 w-4 mr-1 text-slate-400" /> Full-time</span>
                  </div>
                  <p className="text-slate-600 text-sm max-w-3xl">
                    {job.description}
                  </p>
                </div>
                <div>
                  <Link to={`/contact?subject=Application for ${job.title}`} className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback box */}
          <div className="mt-12 bg-blue-50 rounded-2xl border border-blue-100 p-8 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Don't see a perfect fit?</h3>
            <p className="text-slate-600 mb-6">We're always looking for talented individuals. Send us your resume anyway!</p>
            <Link to="/contact" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-800">
              Drop us a line <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Careers;
