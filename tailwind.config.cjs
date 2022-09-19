module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage : {
        'hero-desktop' : "url('assets/images/desktop/image-hero.jpg')",
        'hero-mobile' : "url('assets/images/mobile/image-hero.jpg')",
      },
      fontFamily: {
        'Alata': ['Alata', 'sans-serif'],
        'josefins': ['Josefin Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}