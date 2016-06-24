var Bacon = require('baconjs'),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  store = new Bacon.Bus(),
  state = require('./shared/initial-state')

store
  .scan(state, reducer)
  .skip(1) // skip the initial state
  .onValue(validate)

module.exports = function(suite) {
  suite.add('baconjs', function() {
    store.push({ type: 'INCREMENT' })
    store.push({ type: 'DECREMENT' })
  })
}
