import { CALCULATE_RESULT } from "./types";

export function calculateResult(data){
  return {
    type: CALCULATE_RESULT,
    data
  }
}