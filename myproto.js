function myProto(val) {
  this.userName = val;
}

myProto.prototype.write = function() {};

module.exports = myProto;
