/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // ✅ appディレクトリ内の全てのファイルを対象にする
    './components/**/*.{js,ts,jsx,tsx}', // ✅ componentsディレクトリ内のファイルも対象
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
