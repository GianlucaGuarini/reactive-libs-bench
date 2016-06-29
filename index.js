const Benchmark = require('benchmark'),
  suite = new Benchmark.Suite(),
  tests = {
    rx: require('./lib/rx'),
    redux: require('./lib/redux'),
    riotux: require('./lib/riotux.js'),
    rtx: require('./lib/rtx.js'),
    baconjs: require('./lib/bacon'),
    'node-event-emitter': require('./lib/node-event-emitter'),
    'riot-observable': require('./lib/riot-observable'),
    vanilla: require('./lib/vanilla')
  }

Object.keys(tests).forEach((name) => tests[name](suite))

suite
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('error', function(e) {
    console.log(e.target.error)
  })
.run({async: true})
