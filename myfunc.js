function myFunc(val) {
  let userName = val;
  let currentAction;

  function work (action) {
    currentAction = action;
  }

  return {
    work
  };
};

module.exports = myFunc;
