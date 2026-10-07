/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,ts,jsx,tsx}', 
    // Must include your Storybook files
    './src/**/*.stories.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4E2CA3',
          200: '#2D1A5E',
          100: '#8A74C0',
          50: '#E4E1EB'
        },
        gray: {
          DEFAULT: '#E8EAEC',
          100: '#A5ADB2'
        }
      },
      plugins: [],
    }
  }
}