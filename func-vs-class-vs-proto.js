/* eslint-disable no-console */
const myClass = require('./instances/myClass.js');
const myFactoryFunc = require('./instances/myFactoryFunc.js');
const myFuncConstructor = require('./instances/myFuncConstructor.js');
const myProto = require('./instances/myProto.js');

const Benchmark = require('benchmark');

const suite = Benchmark.Suite('Which one is fastest?');

const myCallbacks = {
  done: () => {},
};

suite.add('class', () => {
  const x = myClass('MrUser', myCallbacks);
  x.work();
})
  .add('factory function', () => {
    const x = myFactoryFunc('MrUser', myCallbacks);
    x.work();
  })
  .add('function constructor', () => {
    const x = myFuncConstructor('MrUser', myCallbacks);
    x.work();
  })
  .add('prototype function', () => {
    const x = myProto('MrUser', myCallbacks);
    x.work();
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    const fastest = suite.filter('fastest').map('name');
    console.log(`Fastest is ${fastest}`);
  })
  .run({ async: true });
