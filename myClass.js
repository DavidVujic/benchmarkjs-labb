const noops = require('./noops.js');

class myClass {
  constructor(name, events) {
    this.userName = name;
    this.events = events;
  }

  work() {
    this.events.done(this.userName);
  }
}

function create(name, events=noops) {
  return new myClass(name, events);
}

module.exports = create;
