const EventEmitter = require('events');
const util = require('util');

function myClass(name) {
  this.userName = name;

  this.work = function () {
    this.emit('done', this.userName);
  };
}

util.inherits(myClass, EventEmitter);

function create(name) {
  return new myClass(name);
}

module.exports = create;
