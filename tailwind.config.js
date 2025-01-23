/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './src/containers/**/*.{js,jsx,ts,tsx}',
    './src/containers/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'white-50': '#ffffff80',
        'white-20': '#ffffff40',
        primary: '#31313D',
        secondary: '#464655',
        red: '#E00C39',
        bg: '#202028',
      },
    },
  },
  plugins: [],
};
