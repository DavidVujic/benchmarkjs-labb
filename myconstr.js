function myConstr(val) {
  this.userName = val;

  this.work = function (action) {
    this.currentAction = action;
  };
}

module.exports = myConstr;
