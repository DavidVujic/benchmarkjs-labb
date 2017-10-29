const { EventEmitter } = require('events');

class MyClass extends EventEmitter {
  constructor(name) {
    super();
    this.userName = name;
  }

  work() {
    this.emit('done', this.userName);
  }
}

function create(name) {
  return new MyClass(name);
}

module.exports = create;
