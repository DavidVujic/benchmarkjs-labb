const noops = require('./noops.js');

function myClass(name, events) {
  this.userName = name;
  this.events = events;
}

myClass.prototype.work = function() {
  this.events.done(this.userName);
};

function create(name, events=noops) {
  return new myClass(name, events);
}

module.exports = create;
