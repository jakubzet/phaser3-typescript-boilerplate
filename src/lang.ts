import idiom from "idiom.js";

export const lang = idiom({
  default: {
    welcome: "Welcome to Phaser + ES6 + Webpack!",
  },
  pl: {
    welcome: "Witaj w Phaser + ES6 + Webpack!",
  },
})(window.navigator.language);
