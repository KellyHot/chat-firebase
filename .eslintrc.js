module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 0,
    'no-underscore-dangle': 0,
    'generator-star-spacing': 0,
    'nuxt/no-cjs-in-config': 'off',
    'import/no-unresolved': 0,
  },
  settings: {
    'import/resolver': {
        'nuxt-import': {},
    },
  },
}
