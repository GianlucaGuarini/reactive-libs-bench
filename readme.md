# Benchmark tests to check some of the most famous reactive libraries

Results on a MacBook Pro 10.13.2 Node v7.4.0
```
icaro (ES6 proxy + debounced) x 1,550,641 ops/sec ±0.69% (83 runs sampled)
erre (async promises) x 120,882 ops/sec ±3.02% (52 runs sampled)
introspected (ES6 proxy) x 18,653 ops/sec ±1.89% (85 runs sampled)
vanilla x 12,699 ops/sec ±2.07% (85 runs sampled)
rx x 12,368 ops/sec ±2.05% (84 runs sampled)
evee x 12,312 ops/sec ±2.01% (81 runs sampled)
node-event-emitter x 12,465 ops/sec ±1.88% (84 runs sampled)
riot-observable x 12,162 ops/sec ±1.90% (82 runs sampled)
redux x 12,014 ops/sec ±1.61% (83 runs sampled)
baconjs x 11,587 ops/sec ±1.91% (83 runs sampled)
```

## How to run the tests

```
$ npm test
```

