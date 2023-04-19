module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended'],
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module'
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'object-curly-spacing': [2, 'always'],
    'arrow-spacing': [2, { before: true, after: true }],
    'block-spacing': [2, 'always'],
    'comma-spacing': [2, { before: false, after: true }],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    indent: [2, 2, { SwitchCase: 1 }],
    curly: [2, 'multi-line'],
    semi: [2, 'never']
  }
}
