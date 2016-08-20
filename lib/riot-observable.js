var
  observable = require('riot-observable'),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  store = observable(),
  state = require('./shared/initial-state')

store
  .on('INCREMENT', function (type = 'INCREMENT') {
    state = reducer(state, { type })
    validate(state)
  })
  .on('DECREMENT', function(type = 'DECREMENT') {
    state = reducer(state, { type })
    validate(state)
  })

module.exports = function(suite) {
  suite.add('riot-observable', function() {
    store
      .trigger('INCREMENT')
      .trigger('DECREMENT')
  })
}
