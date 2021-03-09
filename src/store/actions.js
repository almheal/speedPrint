import { CALCULATE_RESULT, LANGUAGE_PRINT } from "./types";

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