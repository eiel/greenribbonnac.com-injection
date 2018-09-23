module.exports = {
  env: {
    browser: true
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended"
  ],
  plugins: ["flowtype", "compat"],
  rules: {
    "flowtype/require-valid-file-annotation": ["error", "always"],
    "compat/compat": "error"
  }
};
