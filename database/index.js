const mongoose = require('mongoose');
const MongoDB = process.env.MONGODB_URI || 'mongodb://localhost/navbar';
const Seed = require('./seed.js');
mongoose.connect(MongoDB, { useMongoClient: true });

const db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
  db.dropDatabase();
  navbarSave(Seed.seedGen());
});

var navbarSchema = mongoose.Schema({
  bundleId: Number,
  countDown: Number
});

const Navbar = mongoose.model('Navbar', navbarSchema);

const navbarSave = (data) => {
  let navbarData = data.map(data => {
    return {
      bundleId: data.bundleId,
      countDown: data.countDown
    }
  })
  return Navbar.insertMany(navbarData)
  .then (result => {
    console.log ('saved to database');
  })
  .catch (err => console.log ('failed to save to database', err));
};

module.exports = {
  navbarSave, Navbar
}