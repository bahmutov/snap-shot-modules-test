const sum = require('./sum')
const snapshot = require('snap-shot')

it('2 + 5 should match snap-shot', () => {
  const result = sum(2, 5)
  snapshot(result)
})
