// const db = require('./index.js');

seedGen = () => {
  var bundleId, countDown;
  var timerData = [];
  for (let i = 1; i < 100; i++) {
    bundleId = i;
    timer = Number(Math.floor (Math.random() * 13) + 1);
    countDown = timer;  // countdown in days, will adjust to be more granular later
    timerData.push({
      bundleId,
      countDown
    })
  }
  return timerData;
};

module.exports = {
  seedGen
}