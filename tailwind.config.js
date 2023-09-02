/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customgray: '#6A6A6A', 
        customgreen: '#55B995',
        forcross: '#414141',
        forsearch:'#3E3E3E',
        forsearchtext: '#C5C5C5'
      },
      fontSize: {
        'xxs': '10px',
        'xxxs': '8px',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'], // 'Pacifico' - название шрифта, 'cursive' - фоллбек на обычный шрифт
      },
    },
  },
  plugins: [],
}

