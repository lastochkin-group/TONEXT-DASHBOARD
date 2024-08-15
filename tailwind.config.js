/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        "bg_color": "#FFFFFF",
        "secondary_bg_color": "#F7F9FB",
        "bg_dark_color": "#12172D",
        "secondary_bg_color": "#252F59",
        "text_color": "#12172D",
        "text_dark_color:": "#FFFFFF",
        "hint_color": "#70758E",
        "button_color": "#EAEDFB",
        "button_text_color": "#12172D",
        "button_dark_color": "#252F59",
        "button_dark_text_color": "#FFFFFF",
        "blue": "#0098E9"

      }
    },
  },
  plugins: [],
}
