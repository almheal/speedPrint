import { createStore } from '../../core/store/createStore'

let store
let mockFn

const reducer = (state, action) => {
  if (action.type === 'test') {
    state = { ...state, number: 1 + action.data }
  }
  return state
}

describe('test createStore', () => {
  beforeEach(() => {
    store = createStore(reducer, {})
    mockFn = jest.fn()
  })

  test('init store without initial state => empty object', () => {
    expect(store.getState()).toEqual({})
  })

  test('init store with initial state', () => {
    store = createStore(reducer, { num: 2, operation: '+' })
    expect(store.getState()).toEqual({ num: 2, operation: '+' })
  })

  test('createStore should return object with methods => subscribe, dispatch, getState', () => {
    expect(store).toHaveProperty('dispatch')
    expect(store).toHaveProperty('subscribe')
    expect(store).toHaveProperty('getState')
  })

  test('call method dispatch should change state', () => {
    store.dispatch({ type: 'test', data: 5 })
    const { number } = store.getState()
    expect(number).toBe(6)
  })

  test('method subscribe return object with unsubsribe method', () => {
    const sub = store.subscribe(() => 1)
    expect(sub).toHaveProperty('unsubscribe')
  })

  test('unsubscribe store', () => {
    const sub = store.subscribe(mockFn)
    sub.unsubscribe()

    store.dispatch({ type: 'test', data: 3 })

    expect(mockFn).not.toHaveBeenCalled()
  })
})
