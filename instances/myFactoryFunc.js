const noops = require('../noops.js');

function create(name, events = noops) {
  return {
    userName: name,
    events,
    work() {
      this.events.done(this.userName);
    },
  };
}

module.exports = create;
