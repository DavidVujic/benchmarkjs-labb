const EventEmitter = require('events');
const util = require('util');

function myClass(name) {
  this.userName = name;
}

myClass.prototype.work = function() {
  this.emit('done', this.userName);
};

util.inherits(myClass, EventEmitter);

function create(name) {
  return new myClass(name);
}

module.exports = create;
