const Benchmark = require('benchmark'),
  suite = new Benchmark.Suite(),
  rxBench = require('./lib/rx'),
  reduxBench = require('./lib/redux'),
  baconBench = require('./lib/bacon'),
  riotObservableBench = require('./lib/riot-observable'),
  vanillaBench = require('./lib/vanilla')

reduxBench(suite)
rxBench(suite)
riotObservableBench(suite)
baconBench(suite)
vanillaBench(suite)

suite
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('error', function(e) {
    console.log(e.target.error)
  })
.run({async: true})
