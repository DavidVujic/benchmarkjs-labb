const noops = require('../noops.js');

function MyClass(name, events) {
  this.userName = name;
  this.events = events;
}

MyClass.prototype.work = function work() {
  this.events.done(this.userName);
};

function create(name, events = noops) {
  return new MyClass(name, events);
}

module.exports = create;
