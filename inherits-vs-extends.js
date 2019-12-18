const Benchmark = require('benchmark');
const myClassExtended = require('./inheritance/myClassExtended.js');
const myFuncConstructorExtended = require('./inheritance/myFuncConstructorExtended.js');
const myProtoExtended = require('./inheritance/myProtoExtended.js');

const suite = Benchmark.Suite('Which one is fastest?');

function myEventListener() {}

suite.add('extended class with events', () => {
  const x = myClassExtended('MrUser');
  x.on('done', myEventListener);
  x.work();
})
  .add('extended function constructor with events', () => {
    const x = myFuncConstructorExtended('MrUser');
    x.on('done', myEventListener);
    x.work();
  })
  .add('extended prototype function with events', () => {
    const x = myProtoExtended('MrUser');
    x.on('done', myEventListener);
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
