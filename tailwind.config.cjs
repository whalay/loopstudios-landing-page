module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage : {
        'hero-desktop' : "url('images/desktop/image-hero.jpg')",
        'hero-mobile' : "url('images/mobile/image-hero.jpg')",
        'curiosity' : "url('images/desktop/image-curiosity.jpg')"
      }
    },
  },
  plugins: [],
}