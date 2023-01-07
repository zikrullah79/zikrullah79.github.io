module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        'standard': '100px',
        'mobile': '20px',
      }
    },
    dropShadow: {
      'basic-blue': '0 35px 35px rgba(91, 192, 248, 0.45)',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"],
  },
}
