var
  observable = require('riot-observable'),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  store = observable(),
  state = require('./shared/initial-state')

store.on('INCREMENT DECREMENT', function (type) {
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
