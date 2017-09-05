function write() {}

function myFunc(val) {
  let userName = val;

  return {write: write};
};

module.exports = myFunc;
