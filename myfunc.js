function work() {}

function myFunc(val) {
  let userName = val;
  let currentAction;
  return {
    work(action) {
      currentAction = action;
    }
  };
};

module.exports = myFunc;
