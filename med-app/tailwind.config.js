const { calculateNewValue } = require('@testing-library/user-event/dist/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'd-orange': '#ffa559',
        'l-orange':'#ffe6c7',
        'd-grey': '#454545'
      },
      width: {
        '0.5/12': '4%',
        '0.55/12': '4.5%',
        '11.5/12': '95.83%',
        '1.5/4':'37.5%',
        '1.5/3':'50%',
        '1.5/6':'25%',
        '1.5/12':'12.5%',
        '1.2/3':'40%',
        '1.4/3':'46.66%'
      },
      height: {
        '1.5/3':'50%',
        '1.5/4':'37.5%',
        '695':'685px',
        '3.5/6':'58.5%'
      },
      inset: {
        '1/6': '16.66%',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

