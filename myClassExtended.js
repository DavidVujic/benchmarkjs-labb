const EventEmitter = require('events');
const util = require('util');

class myClass {
  constructor(name) {
    this.userName = name;
  }

  work() {
    this.emit('done', this.userName);
  }
}

util.inherits(myClass, EventEmitter);

function create(name) {
  return new myClass(name);
}

module.exports = create;
