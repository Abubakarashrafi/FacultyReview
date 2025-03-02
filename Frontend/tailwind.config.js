/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
   container: {
      center: true, // Center the container by default
      padding: {
        DEFAULT: '1rem', // Default padding
        sm: '2rem', // Padding for sm breakpoint
       
      },
    }
  },
  plugins: [],
};
