module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors:{
        'primary-background':'var(--background-primary)',
        'sec-background':'var(--background-sec)',
        'menu-background':'var(--background-menu)',
        primary:'var(--color-primary)',
        secondary:'var(--color-secondary)',
        spanColor:'var(--color-spanColor)'
      }
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: [],
}
