export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export const increase = () => ({
  type: INCREMENT_COUNTER,
  payload: {},
  data: [],
})

export const decrease = () => ({
  type: DECREMENT_COUNTER,
  payload: {},
  data: [],
})
