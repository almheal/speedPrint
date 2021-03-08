import { CALCULATE_RESULT } from "./types"

export function rootReducer(state, action){
  switch(action.type){
    case(CALCULATE_RESULT):
    
    return {...state, result: action.data}

    default: return state
  }

  return state
}