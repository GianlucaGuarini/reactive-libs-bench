var validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  state = require('./shared/initial-state')

function dispatchEvent({ type }) {
  state = reducer(state, { type })
  validate(state)
}

module.exports = function(suite) {
  suite.add('vanilla', function() {
    dispatchEvent({ type: 'INCREMENT' })
    dispatchEvent({ type: 'DECREMENT' })
  })
}
