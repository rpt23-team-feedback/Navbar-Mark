const db = require('./index.js');

const seed = () => {
  return db.navbarSave(seedGen());
}

seedGen = function () {
  var bundleId, countDown;
  var timerData = [];
  for (let i = 1; i < 100; i++) {
    bundleId = i;
    timer = Number(Math.floor (Math.random() * 13) + 1);
    countDown = timer;  // countdown in days, may adjust to be more granular later
    timerData.push ({
      bundleId : bundleId,
      countDown : countDown
    })
  }
  return timerData;
};

module.exports = {
  seed, seedGen
}