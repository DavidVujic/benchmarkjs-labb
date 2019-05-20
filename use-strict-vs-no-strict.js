'use strict';

const Benchmark = require('benchmark');

const myClassWithStrict = require('./strict/withstrict.js');
const myClassWithoutStrict = require('./strict/withoutstrict.js');

const suite = Benchmark.Suite('Which one is fastest?');


suite.add('with strict', () => {
  const x = myClassWithStrict('MrUser');
  x.work();
})
  .add('without strict', () => {
    const x = myClassWithoutStrict('MrUser');
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
