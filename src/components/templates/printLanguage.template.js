
export function printLanguage(placeholder, items){
  return `<div class="select__input" >
  <img class="keyboard-small" src="../src/assets/img/keyboard_toggle.png" alt="keyboard"/>
    <span data-select-placeholder="true">${placeholder}</span>
  </div>
  <div class="select__dropdown" data-dropdown>
    <ul class="select__list">
      ${createItemSelect(items)}
    </ul>
  </div>`
}

function createItemSelect(items){
  return items.map(item => `<li class="select__item" data-select-item="${item.value || item.name}">${item.name}</li>`).join('')
}