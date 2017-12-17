var erre = require('erre'),
  validate = require('./shared/validate'),
  state = require('./shared/initial-state'),
  reducer = require('./shared/reducer'),
  store = erre(function(action) {
    state = reducer(state, action)
    return state
  })

store.onValue(validate)

module.exports = function(suite) {
  suite.add('erre', function() {
    store.push({ type: 'INCREMENT' })
    store.push({ type: 'DECREMENT' })
  })
}
