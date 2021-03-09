
export function selectTemplate(placeholder, items){
  return `<div class="select__input" data-select-placeholder="true">${placeholder}</div>
  <div class="select__dropdown" data-dropdown>
    <ul class="select__list">
      ${createItemSelect(items)}
    </ul>
  </div>`
}

function createItemSelect(items){
  return items.map(item => `<li class="select__item" data-select-item="${item}">${item}</li>`).join('')
}