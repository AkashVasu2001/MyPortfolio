/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        englisch: [
          'englisch-regular',
          'englisch-bold',
          'englisch-italic',
          'englisch-bold-italic',
          'englisch-black',
          'englisch-black-italic',
          'englisch-extrabold',
          'englisch-extrabold-italic',
          'englisch-medium',
          'englisch-medium-italic',
          'englisch-light',
          'englisch-light-italic',
          // Fallback fonts, like sans-serif, can be added for safety
          'sans-serif',
        ]
      },
      transitionDelay: {
        '500': '0.5s', // Adding delay utility
      },
      animation: {
        'pulse-slide-x': 'pulse-slide-x 3s linear infinite',
        'circular-motion': 'circular-motion 60s infinite',
        'sine-wave': 'sine-wave 2s linear infinite',

      },
      keyframes: {
        'pulse-slide-x': {
          '0%': { 
            transform: 'translateX(-100%)', 
            opacity: '1', 
            boxShadow: '0px 0px 30px 10px rgba(34, 211, 238, 0.8)'  // cyan-400 spread more
          },
          '20%': { 
            transform: 'translateX(-80%)', 
            opacity: '0.95', 
            boxShadow: '0px 0px 35px 12px rgba(34, 211, 238, 0.75)'  // more spread and visibility
          },
          '40%': { 
            transform: 'translateX(-60%)', 
            opacity: '0.9', 
            boxShadow: '0px 0px 40px 14px rgba(34, 211, 238, 0.7)'  
          },
          '60%': { 
            transform: 'translateX(-40%)', 
            opacity: '0.85', 
            boxShadow: '0px 0px 45px 16px rgba(34, 211, 238, 0.65)' 
          },
          '80%': { 
            transform: 'translateX(-20%)', 
            opacity: '0.8', 
            boxShadow: '0px 0px 50px 18px rgba(34, 211, 238, 0.6)'  
          },
          '100%': { 
            transform: 'translateX(0%)', 
            opacity: '0.75', 
            boxShadow: '0px 0px 55px 20px rgba(34, 211, 238, 0.55)'  
          },
        },
        'circular-motion': {
          '0%': { transform: 'translateX(-100%)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '1' },
        },
        'sine-wave': {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(25%) translateY(-10px)' },
          '50%': { transform: 'translateX(50%) translateY(0)' },
          '75%': { transform: 'translateX(75%) translateY(10px)' },
          '100%': { transform: 'translateX(100%) translateY(0)' },
        },
      },
    },
    plugins: [],
  }
}

// 'pulse-slide-y': {
//           '0%': { transform: 'translateY(0)', opacity: '1' },
//           '25%': { transform: 'translateY(25%)', opacity: '0.7' },
//           '50%': { transform: 'translateY(50%)', opacity: '0.5' },
//           '75%': { transform: 'translateY(75%)', opacity: '0.7' },
//           '100%': { transform: 'translateY(100%)', opacity: '1' },
//         },
//        'pulse-slide-y': 'pulse-slide-y 8s linear infinite',
