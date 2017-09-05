const Benchmark = require('benchmark');
const myClass = require('./myclass.js');
const myProto = require('./myproto.js');
const myFunc = require('./myfunc.js');
const myConstr = require('./myconstr.js');

const suite = new Benchmark.Suite;

suite.add('using class', function() {
  const x = new myClass('MrUser');
  x.work('run');
})
.add('using proto', function() {
  const x = new myProto('MrUser');
  x.work('run');
})
.add('using func', function() {
  const x = myFunc('MrUser');
  x.work('run');
})
.add('using constr', function() {
  const x = new myConstr('MrUser');
  x.work('run');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  const fastest = this.filter('fastest').map('name');
  console.log(`Fastest is ${fastest}`);
})
.run({'async': true});
