const keyboardKeys = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '←'],
  ['tab', 'й', 'ц', 'у','к','е','н','г','ш','щ','з','х','ъ', '\\'],
  ['caps', 'ф', 'ы', 'в', 'а','п','р','о','л','д','ж','э','enter'],
  ['shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift'],
  ['space']
]

const keysClasses = {
  'tab': 'key-tab',
  '←': 'key-back',
  'caps': 'key-caps',
  'enter': 'key-enter',
  'shift': 'key-shift',
  'space': 'key-space',
  '12йфя0-=зхъжэ.': 'green',
  '3цы9щдчю': 'blue',
  '4увс8шлб': 'pink',
  '56кеапми': 'orange',
  '7нгроть': 'yellow'
}

export function keyboardTemplate(){
  const rowKeys = createRowKeys(keyboardKeys)
  return `
    ${rowKeys.join('')}
`
}

function createRowKeys(arr){
  return arr.map(keysArr =>{
    const keys = keysArr.map(key =>{
      return createKey(key)
    })
    return `<div class="keys__row">${keys.join('')}</div>`
  })
}


function createKey(key){
  const keyClass = checkClassesKey(key)
  if(keyClass){
    return `<div class="keyboard__item ${keysClasses[keyClass]}" data-key="${key}">${key === 'space' ? '' : key}</div>`
  }else{
    return `<div class="keyboard__item" data-key="${key}">${key}</div>`
  }
}

function checkClassesKey(key){
  return Object.keys(keysClasses).filter(item => item.includes(key))
}

