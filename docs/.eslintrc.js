module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['standard', 'react', 'prettier'],
  rules: {
    'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'prettier/prettier': 'error',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+,
    jsx: true,
  },
  globals: {
    fetch: false,
    localStorage: false,
    React: true,
  },
}
