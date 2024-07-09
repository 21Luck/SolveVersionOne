/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{},
        stroke: {
          1: "#26242C",
        },
        n:{
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          // yellow
          11: "#ffcb06",
          // blue
          12: "#070033 ",
          13: "#000616",
          // deep blue
          14: "#010019",
          15: "#002244",
        },
      }
    },
    screens:{
      smst:'370px',
      xs:'480px',
      ss:'620px',
      sm:'768px',
      md:'1060px',
      lg:'1200px',
      xl:'1700px',
    },
  },
  plugins: [
    plugin(function({addComponents}) {
      addComponents({
        '.dcenter':{
          '@apply flex items-center justify-center':{},
        },
        '.h1':{
          '@apply text-3xl sm:text-5xl md:text-6xl smst:ml-10 tracking-wide':{},
        },
        '.h2':{
          '@apply text-2xl sm:text-3xl md:text-4xl  mt-10  smst:right-10 smst:ml-10 tracking-wide':{},
        },
        '.divbtn':{
          '@apply flex items-center justify-between':{},
        },
        '.btn1':{
          '@apply py-2 px-4 bg-gradient-to-r from-blue-800 to-yellow-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out':{},
        },
        '.btn2':{
          '@apply py-2 px-4 border border-n-4 text-white font-semibold rounded-lg shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out':{},
        },
        '.textg':{
          '@apply bg-gradient-to-r from-blue-800 to-yellow-700 text-transparent bg-clip-text':{},
        },
        '.text':{
          '@apply text-lg text-center sm:max-w-[470px]  text-n-3 max-w-4xl mt-5':{},
        },
      })
  }),
  ],
}