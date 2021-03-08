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
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'eol-last': 2,
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'brace-style': [2, 'stroustrup', { 'allowSingleLine': true }],
    'jsx-quotes': [2, 'prefer-double']
  }
}
