import sum from './sum'
import snapshot from 'snap-shot'
// const snapshot = require('snap-shot')

it('2 + 5 should match snap-shot', () => {
  const result = sum(2, 5)
  snapshot(result)
})
