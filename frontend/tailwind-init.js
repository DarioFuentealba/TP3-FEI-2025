import tailwindcss from 'tailwindcss';
import fs from 'fs';

const config = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;

fs.writeFileSync('tailwind.config.js', config);
fs.writeFileSync('postcss.config.js', "module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, } }");

console.log("Archivos tailwind.config.js y postcss.config.js creados.");
