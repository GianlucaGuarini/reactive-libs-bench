var
  introspected = require('introspected'),
  store = introspected({
    type: null,
    state: require('./shared/initial-state')
  }, (root, [fragment]) => {
    // undefined at beginning ¯\_(ツ)_/¯
    if (!fragment) return

    const value = store[fragment]

    if (fragment === 'type') {
      store.state = reducer(store.state, { type: value })
      validate(store.state)
    }
  }),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer')



module.exports = function(suite) {
  suite.add('introspected (ES6 proxy)', function() {
    store.type = store.state === 0 ? 'INCREMENT' : 'DECREMENT'
  })
}
