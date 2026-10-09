/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c1a30',
          dark: '#081220',
          light: '#1e3a8a',
          container: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#4059aa',
          container: '#8fa7fe',
        },
        tertiary: {
          DEFAULT: '#d97706',
          container: '#b45309',
        },
        surface: {
          DEFAULT: '#f9f9ff',
          bright: '#ffffff',
          dim: '#cfdaf2',
          container: '#e7eeff',
          'container-low': '#f0f3ff',
          'container-high': '#dee8ff',
          'container-highest': '#d8e3fb',
          'container-lowest': '#ffffff',
        },
        'on-surface': '#111c2d',
        'on-surface-variant': '#44474d',
        outline: '#75777e',
        'outline-variant': '#c5c6cd',
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
        },
        success: {
          DEFAULT: '#059669',
          container: '#d1fae5',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        virgil: ['Virgil', 'Caveat', 'Architects Daughter', 'cursive'],
        body: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
        headline: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        sm: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
        full: '9999px',
      },
      boxShadow: {
        parchment: '0 2px 6px -1px rgba(12, 26, 48, 0.05), 0 1px 3px -1px rgba(12, 26, 48, 0.03)',
        'parchment-hover': '0 8px 16px -2px rgba(12, 26, 48, 0.08), 0 3px 6px -2px rgba(12, 26, 48, 0.04)',
        'proctor-alert': '0 0 0 2px rgba(220, 38, 38, 0.3), 0 8px 20px rgba(220, 38, 38, 0.15)',
      },
    },
  },
  plugins: [],
};
