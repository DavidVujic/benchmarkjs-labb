const EventEmitter = require('events');
const util = require('util');

class MyClass {
  constructor(name) {
    this.userName = name;
  }

  work() {
    this.emit('done', this.userName);
  }
}

util.inherits(MyClass, EventEmitter);

function create(name) {
  return new MyClass(name);
}

module.exports = create;
