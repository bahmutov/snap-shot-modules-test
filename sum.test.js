import sum from './sum'
import snapshot from 'snap-shot'

it('2 + 5 should match snap-shot', () => {
  const result = sum(2, 5)
  snapshot(result)
})

it.only('multiple values', () => {
  snapshot('first')
  snapshot('second')
  snapshot('third')
})
