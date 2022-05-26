module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4338ca",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          red: 'red',
          "base-100": "#ffffff",
        },
      },
     
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
