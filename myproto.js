function myProto(val) {
  this.userName = val;
}

myProto.prototype.work = function() {};

module.exports = myProto;
