/**
 * Central API Configuration
 * 
 * In development (locally), API_BASE_URL is empty ('') to route API requests
 * through Vite's local dev server proxy (vite.config.js), avoiding browser CORS restrictions.
 * In production, it uses VITE_API_URL or defaults to the Render backend URL.
 */

const isDevelopment = import.meta.env.MODE === 'development';
const PROD_API_URL = 'https://shrayutechbackend.onrender.com';

export const API_BASE_URL = isDevelopment
  ? ''
  : (import.meta.env.VITE_API_URL || PROD_API_URL);

console.log(`[API Config] Mode: ${import.meta.env.MODE}, Base URL: ${API_BASE_URL || '(Relative Vite Proxy)'}`);


