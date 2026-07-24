/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080C',
          900: '#0B0B12',
          800: '#12121C',
          700: '#1A1A28',
          600: '#26263A',
        },
        mist: {
          50: '#F7F7FB',
          100: '#EDEDF4',
          300: '#C7C7D6',
          400: '#9A9AAD',
          500: '#6D6D82',
        },
        brand: {
          blue: '#5B6EF5',
          blueLight: '#7C8CFF',
          violet: '#8B5CF6',
          violetDeep: '#6D3FD9',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Manrope"', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(115deg, #5B6EF5 0%, #8B5CF6 100%)',
        'brand-gradient-soft': 'linear-gradient(115deg, rgba(91,110,245,0.15) 0%, rgba(139,92,246,0.15) 100%)',
        'glow-radial': 'radial-gradient(circle at 50% 0%, rgba(123,140,255,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 60px -15px rgba(123,140,255,0.45)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -20px rgba(0,0,0,0.6)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        float: 'float 6s ease-in-out infinite',
        floatSlow: 'floatSlow 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
