const Benchmark = require('benchmark');
const myClassEvents = require('./eventemitter3/myClassEvents.js');
const myClassEventEmitter3 = require('./eventemitter3/myClassEventEmitter3.js');

const suite = Benchmark.Suite('Which one is fastest?');

function myEventListener() {}

suite.add('extended class with events', () => {
  const x = myClassEvents('MrUser');
  x.on('done', myEventListener);
  x.work();
})
  .add('extended class with EventEmitter3', () => {
    const x = myClassEventEmitter3('MrUser');
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
