/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ['Poppins'],
        'montserrat' : ['Montserrat'],
        'lato':['Lato'],
        'opensans':['Open Sans'],
        'figtree':['Figtree']
      },
      screens:{
        // MIN WIDTH
        'md':{'min':'767px'},
        //  MAX WIDTH
        '2xlM': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xlM': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lgM': {'max': '1166px'},
        // => @media (max-width: 1166px) { ... }
  
        'mgM': {'max': '1000px'},    

        'mhM':{'max':'867px'},
  
        'mdM': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'smM': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'tsM' : {'max':'520px'},
        
        'xsM': {'max': '430px'},
  
        'zsM' : {'max':'408px'}
  
      },
    },
  },
  plugins: [],
}