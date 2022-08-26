module.exports = {
  content: [
    __dirname + "/components/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      padding: '1.5rem',
      center:'true'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
