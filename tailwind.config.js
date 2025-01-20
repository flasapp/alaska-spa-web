/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    
    extend: {
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes:
        {
          gradient: { to: { 'background-position': '200% center' }, },
      },
      backgroundImage: {
        header: "url('@/assets/images/bg-header.png')",
      },
      padding: {
        15: '3.75rem', // 60px
      },
      font: {
        
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      // Lights
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "retro",
      "cyberpunk",
      "valentine",
      "garden",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "cmyk",
      "autumn",
      "acid",
      "lemonade",
      "winter",
      "nord",
      
      //DarkLights
      "aqua",

      // Darks
      "dark",
      "synthwave",
      "halloween",
      "forest",
      "black",
      "luxury",
      "dracula",
      "business",
      "night",
      "coffee",
      "sunset",
      "dim",
      
    ],
    darkTheme: "winter", // name of one of the included themes for dark mode
    base: true, // dim background color and foreground color for root element by default
    preflight: true, // include base styles (like a reset) before the daisyUI styles
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // 
  }
}

