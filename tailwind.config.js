/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/uikit/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

    colors: {
      darkTitle: '#251F04',
      subTitle: '#777369',
      mainColor: '#CBB26A',
      hoverColor: '#DBAF5A',
      lightBg: '#F8F4EE',
      body: '#CACCCD',
      deepBlue: '#162435',
      brightBlue: '#2E5CFF',
      darkGray: '#34485B',
      charcoal: '#505053',
      fireRed: '#FF0303',

      // Legacy

      dimGray: '#B8B6CB',
      pink: '#ED00C9',
      purple: '#BD00ED',
      left: '#1D023B',
      right: '#17023E',
      green: '#26fffe',
      blue: '#0000AF',
      success: '#55a361',
      error: '#cf3a41',
      warn: '#edb831',
      info: '#006cff',
      placeholder: '#757384',
    },
  },
  plugins: [],
};
