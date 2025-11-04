/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '544px',  // Custom breakpoint for 544px
      },
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
        },
        body: {
          color: '#64748B',
        },
        dark: {
          DEFAULT: '#1F2937',
          2: '#374151',
          3: '#4B5563',
          6: '#6B7280',
        },
      },
    },
  },
  plugins: [],
}