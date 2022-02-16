module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['@babel', 'import', 'react', 'react-hooks', 'prettier'],
  rules: {
    'no-var': 'error',
    'array-callback-return': 'error',
    'consistent-return': 'error',
    'babel/no-invalid-this': 'error',
    'import/no-duplicates': 'error',
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'prettier/prettier': 'error',
    'react/no-typos': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
      flowVersion: '0.53.1',
    },
  },
}
