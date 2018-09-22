module.exports = {
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended"
  ],
  plugins: ["flowtype"],
  rules: {
    "flowtype/require-valid-file-annotation": ["error", "always"]
  }
};
