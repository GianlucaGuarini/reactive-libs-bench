const Benchmark = require('benchmark'),
  suite = new Benchmark.Suite(),
  reduxBench = require('./lib/redux'),
  baconBench = require('./lib/bacon')

reduxBench(suite)
baconBench(suite)

suite
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('error', function(e) {
    console.log(e.target.error)
  })
.run({async: true})
