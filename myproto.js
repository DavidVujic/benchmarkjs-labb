function myProto(val) {
  this.userName = val;
}

myProto.prototype.work = function(action) {
  this.currentAction = action;
};

module.exports = myProto;
