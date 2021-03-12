import gun from '../../assets/img/gun.png'

export function testStartModalTemplate(){
  return `<div class="modal__body">
  <div class="language__select line-hover" data-select>

  </div>
  <div class="modal__icon">
    <img
      class="modal__icon-img"
      src="${gun}"
      alt="start"
    />
  </div>
  <h5 class="modal__title">Приготовься печатать. Поехали!</h5>
  <button class="button-primary" data-button-start="start">
    начать печатать
  </button>
</div>`
}