class MainHelper {
   getRandomBetween = (min = 0, max = 9) => Math.floor(Math.random() * (max + 1 - min)) + min;
}

module.exports = MainHelper;
