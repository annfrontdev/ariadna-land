module.exports = {
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never', // <img> ✓  <img/> ✗
          normal: 'always', // <div></div> ✓  <div> ✗
          component: 'always',
        },
      },
    ],
  },
};
