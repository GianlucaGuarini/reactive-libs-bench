const INITIAL_STATE = require('./initial-state')

module.exports = function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}
