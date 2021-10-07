module.exports = getRandom;

function getRandom(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
