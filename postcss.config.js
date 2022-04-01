module.exports = {
  enabled: process.env.NODE_ENV === "production",
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
