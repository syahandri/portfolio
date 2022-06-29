/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html", "./public/js/*.js"],
   darkMode: "class",
   theme: {
      container: {
         center: true,
      },
      extend: {
         fontFamily: {
            'sans': ['Nunito', 'sans-serif'],
         },
      },
   },
   plugins: [],
}
