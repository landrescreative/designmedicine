import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos de componentes y páginas
    './app/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos de la carpeta app
    './pages/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos de la carpeta pages si la usas
    './components/**/*.{js,ts,jsx,tsx}' // Incluye todos los archivos de componentes
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B747B',
        secondary: '#647128',
        terciary: '#000000'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
export default config;
