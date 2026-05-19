const requiredVars = ['VITE_API_BASE_URL', 'VITE_APP_NAME', 'VITE_API_KEY', 'VITE_ORIGIN'];

const missing = requiredVars.filter((key) => !import.meta.env[key]);

if (missing.length > 0) {
  throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
}

export const env = {
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  APP_NAME: import.meta.env.VITE_APP_NAME,
  API_KEY: import.meta.env.VITE_API_KEY || '',
  ORIGIN: import.meta.env.VITE_ORIGIN || '',
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT) || 10000,
};
