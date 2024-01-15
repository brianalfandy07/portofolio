/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    // container : {
    //   center : true,
    //   padding :'16px',
    // },
    extend: {
      colors :{

      },
      screens:{
        'xs' :'350px',
        '2xl':{'max' :'2000px'},
      },
    },
  },
  plugins: [],
}

