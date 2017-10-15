const EventEmitter = require('events');
const util = require('util');

function MyClass(name) {
  this.userName = name;

  this.work = () => {
    this.emit('done', this.userName);
  };
}

util.inherits(MyClass, EventEmitter);

function create(name) {
  return new MyClass(name);
}

module.exports = create;
