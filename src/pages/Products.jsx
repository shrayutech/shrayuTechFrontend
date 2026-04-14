// import { useState, useEffect } from 'react';
// import { ExternalLink, CheckCircle } from 'lucide-react';

// const Products = () => {
//   const [productsList, setProductsList] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('/api/products');
//         const result = await response.json();

//         if (result.success) {
//           setProductsList(result.data);
//         } else {
//           setError('Failed to fetch products.');
//         }
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Error connecting to the server.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="bg-slate-900 min-h-screen text-white pt-12 pb-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Flagship Products</h1>
//           <p className="text-xl text-slate-400 leading-relaxed">
//             Market-tested, ready-to-deploy software products designed to solve the most complex industry challenges instantly.
//           </p>
//         </div>

//         {loading ? (
//           <div className="flex justify-center items-center py-20">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
//           </div>
//         ) : error ? (
//           <div className="text-center text-red-400 bg-red-900/20 p-6 rounded-2xl max-w-2xl mx-auto border border-red-800">
//             <h3 className="text-xl font-bold mb-2">Oops!</h3>
//             <p>{error}</p>
//           </div>
//         ) : productsList.length === 0 ? (
//           <div className="text-center text-slate-500 py-10">
//             <p className="text-lg">No products available. (Database might need to be seeded)</p>
//           </div>
//         ) : (
//           <div className="space-y-16">
//             {productsList.map((product, index) => (
//               <div key={product._id || index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 group hover:border-slate-500 transition-colors`}>
//                 <div className={`md:w-1/2 p-12 bg-gradient-to-br ${product.color} flex items-center justify-center relative overflow-hidden`}>
//                   <div className="absolute inset-0 bg-black/10"></div>
//                   <div className="relative z-10 w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 text-5xl font-black tracking-tighter text-white">
//                     {product.name.substring(0,2).toUpperCase()}
//                   </div>
//                 </div>

//                 <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
//                   <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">{product.badge}</span>
//                   <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
//                   <p className="text-slate-400 mb-8 text-lg leading-relaxed">
//                     {product.description}
//                   </p>

//                   <h3 className="font-semibold text-white mb-4">Key Features:</h3>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-slate-300">
//                     {product.features.map((feature, fidx) => (
//                       <li key={fidx} className="flex items-center space-x-2">
//                         <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <div>
//                     <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center">
//                       <ExternalLink className="mr-2 h-5 w-5" />
//                       Request Demo
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Products;

import { Link } from 'react-router-dom';
import { ArrowLeft, Rocket } from 'lucide-react';
import SEO from '../components/SEO';

const Products = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col items-center justify-center p-4">
      <SEO
        title="Our Products"
        description="Discover the innovative software products developed by Shrayu Technologies, from enterprise SaaS platforms to fintech tools."
        keywords="software products, Shrayu technologies products, enterprise SaaS, fintech tools, tech solutions"
      />
      <div className="text-center max-w-2xl mx-auto relative z-10">

        {/* Animated Icon */}
        <div className="mb-10 relative inline-flex justify-center items-center">
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="bg-slate-800 p-6 rounded-full border border-slate-700 relative z-10 shadow-2xl">
            <Rocket className="h-16 w-16 text-blue-400" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Coming Soon
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-12">
          We’re working hard to launch our amazing new site. Stay tuned!
        </p>

        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-blue-500/50 group"
        >
          <ArrowLeft className="mr-3 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[30rem] h-[30rem] bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
      </div>
    </div>
  );
};

export default Products;
