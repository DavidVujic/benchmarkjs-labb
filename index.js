const myClass = require('./myClass.js');
const myClassExtended = require('./myClassExtended.js');
const myFactoryFunc = require('./myFactoryFunc.js');

const myFuncConstructor = require('./myFuncConstructor.js');
const myFuncConstructorExtended = require('./myFuncConstructorExtended.js');
const myProto = require('./myProto.js');
const myProtoExtended = require('./myProtoExtended.js');

const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

function myEventCallback(val) {}

const myEvents = {
  done: () => {}
}

suite.add('class with callback', function() {
  const x = myClass('MrUser');
  x.work();
}).add('extended class with events', function() {
  const x = myClassExtended('MrUser');
  x.on('done', myEventCallback);
  x.work();
}).add('factory function with callback', function() {
  const x = myFactoryFunc('MrUser', myEvents);
  x.work();
}).add('function constructor with callback', function() {
  const x = myFuncConstructor('MrUser', myEvents);
  x.work();
}).add('extended function constructor with events', function() {
  const x = myFuncConstructorExtended('MrUser');
  x.on('done', myEventCallback);
  x.work();
}).add('prototype function with events', function() {
  const x = myProto('MrUser');
  x.work();
}).add('extended prototype function with events', function() {
  const x = myProtoExtended('MrUser');
  x.on('done', myEventCallback);
  x.work();
}).on('cycle', function(event) {
  console.log(String(event.target));
}).on('complete', function() {
  const fastest = this.filter('fastest').map('name');
  console.log(`Fastest is ${fastest}`);
}).run({'async': true});
