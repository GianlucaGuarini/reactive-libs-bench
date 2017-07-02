
var
  Evee = require('evee'),
  evee = new Evee(),
  validate = require('./shared/validate'),
  reducer = require('./shared/reducer'),
  state = require('./shared/initial-state')



evee.on('INCREMENT', function () {
  state = reducer(state, { type: 'INCREMENT' })
  validate(state)
})

evee.on('DECREMENT', function() {
  state = reducer(state, { type: 'DECREMENT' })
  validate(state)
})

module.exports = function(suite) {
  suite.add('evee', function() {
    evee.emit('INCREMENT')
    evee.emit('DECREMENT')
  })
}
