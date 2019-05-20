// eslint-disable-next-line strict
class MyClass {
  constructor(name) {
    this.userName = name;
  }

  work() {
    this.scrambled = Buffer.from(this.userName).toString('base64');

    return this.scrambled;
  }
}

/**
 *
 * @param name {string}
 * @returns {MyClass}
 */
function create(name) {
  return new MyClass(name);
}

module.exports = create;
