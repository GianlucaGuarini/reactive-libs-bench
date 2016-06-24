var
  EventEmitter = require('events'),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  store = new EventEmitter(),
  state = require('./shared/initial-state')

store.on('INCREMENT', function (type = 'INCREMENT') {
  state = reducer(state, { type })
  validate(state)
})

store.on('DECREMENT', function (type = 'DECREMENT') {
  state = reducer(state, { type })
  validate(state)
})

module.exports = function(suite) {
  suite.add('node-event-emitter', function() {
    store.emit('INCREMENT')
    store.emit('DECREMENT')
  })
}
