var Rx = require('rx'),
  store = new Rx.Subject(),
  reducer = require('./shared/reducer'),
  validate = require('./shared/validate'),
  state = require('./shared/initial-state')

store
  .scan(reducer, state)
  .subscribe(validate)

module.exports = function(suite) {
  suite.add('rx', function() {
    store.onNext({ type: 'INCREMENT' })
    store.onNext({ type: 'DECREMENT' })
  })
}
