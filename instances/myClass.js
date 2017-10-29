const noops = require('../noops.js');

class MyClass {
  constructor(name, events) {
    this.userName = name;
    this.events = events;
  }

  work() {
    this.events.done(this.userName);
  }
}

function create(name, events = noops) {
  return new MyClass(name, events);
}

module.exports = create;
