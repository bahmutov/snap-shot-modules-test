// const sum = require('./sum')
import sum from './sum'
const snapshot = require('snap-shot')

it('2 + 5 should match snap-shot', () => {
  const result = sum(2, 5)
  snapshot(result)
})
