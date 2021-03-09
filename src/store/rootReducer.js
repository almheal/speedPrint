import { CALCULATE_RESULT, LANGUAGE_PRINT } from './types'

export function rootReducer(state, action) {
  switch (action.type) {
    case CALCULATE_RESULT:
      return { ...state, result: action.data }
    case LANGUAGE_PRINT:
      return { ...state, languagePrint: action.data}
    default:
      return state
  }
}
