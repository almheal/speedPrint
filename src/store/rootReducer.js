import { CALCULATE_RESULT, LANGUAGE_PRINT, TUTOR_RESULT } from './types'

export function rootReducer(state, action) {
  switch (action.type) {
    case CALCULATE_RESULT:
      return { ...state, result: action.data }
    case LANGUAGE_PRINT:
      return { ...state, languagePrint: action.data}
    case TUTOR_RESULT:
      return { ...state, tutorResult: action.data}
    default:
      return state
  }
}
