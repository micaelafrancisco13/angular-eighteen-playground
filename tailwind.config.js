// tailwind.config.js
module.exports = {
  content: [
    // './src/app/component/tailwind-component/landing-page/hero/**/*.{html,ts}',
    './src/**/*.{html,js}',
  ],
  theme: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
  // corePlugins: {
  //   preflight: false
  // },
}
