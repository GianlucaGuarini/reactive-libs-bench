# Benchmark tests to check some of the most famous reactive libraries


Results on a MacBook Pro 10.11.5 Node v6.2.0
```
redux x 30,194 ops/sec ±2.23% (74 runs sampled)
node-event-emitter x 32,780 ops/sec ±2.60% (72 runs sampled)
rx x 32,383 ops/sec ±2.27% (79 runs sampled)
riot-observable x 28,655 ops/sec ±2.41% (79 runs sampled)
baconjs x 29,824 ops/sec ±2.01% (83 runs sampled)
vanilla x 33,220 ops/sec ±2.42% (77 runs sampled)
```

## How to run the tests

```
$ npm test
```

