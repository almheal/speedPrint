import { CALCULATE_RESULT, LANGUAGE_PRINT, TUTOR_RESULT } from "./types";

export function calculateResult(data){
  return {
    type: CALCULATE_RESULT,
    data
  }
}

export function languagePrint(data){
  return {
    type: LANGUAGE_PRINT,
    data
  }
}

export function changeTutorResult(data){
  return {
    type: TUTOR_RESULT,
    data
  }
}