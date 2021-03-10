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

export function tutorTemplate() {
  return `<div class="tutor__inner">
  <div class="tutor__header">
    <div class="tutor__input">
      <input class="input" type="text" readonly/>
      <div class="tutor__text" data-print>напечатай этот текст и узнай свою скорость печати</div>
    </div>
  </div>
  <div class="tutor__body">
    ${createKeyboard()}
  </div>
</div>`
}

function createKeyboard() {
  const rowKeys = createRowKeys(keyboardKeys)
  return `<div class="keyboard" data-keyboard>
    ${rowKeys.join('')}
  </div>`
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
