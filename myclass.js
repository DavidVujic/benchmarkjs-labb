class myClass {
  constructor(val) {
    this.userName = val;
  }

  work(action) {
    this.currentAction = action;
  }
}

module.exports = myClass;
