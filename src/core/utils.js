import { keyCodes } from "../mocks/keyCodes"


export function randomItemArray(arr){
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export function checkKeyCode(code){
  const findKey = keyCodes.find((item) => item === code)
  return findKey ? false : true
}

export function isEqual(a,b){
  if(typeof a === 'object' && typeof b === 'object'){
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}

export function todayDate(){
  const today = new Date();
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const date = {
    dd,
    mm,
    yyyy
  }
  return `${dd} ${months[mm.slice(1) - 1]} ${yyyy}`
}
