/**
 * Central API Configuration
 * 
 * In development (locally), this points to localhost:5000 via the Vite proxy.
 * In production, this points directly to your Render backend URL.
 */

const isDevelopment = import.meta.env.MODE === 'development';

// The production backend URL
const PROD_API_URL = 'https://shrayutechbackend.onrender.com';

// The base URL used for all API calls
// Use the relative path in development (to trigger the Vite proxy)
// and the full URL in production.
export const API_BASE_URL = isDevelopment ? '' : PROD_API_URL;

console.log(`[API Config] Mode: ${import.meta.env.MODE}, Base URL: ${API_BASE_URL || '(Relative Proxy)'}`);
