export function testingPrintTemplate(){
  return `<div class="container">
  <div class="print__inner">
    <div class="print__body">
      <div class="print__item">
        <div class="print__column">
          <div class="print__text" data-print></div>
        </div>
        <div class="print__info">
          <div class="info__item">
            <div class="info__name">
              <img class="info__icon" src="../src/assets/img/speedometer.svg" alt="print-score"/>
              <span>скорость</span>
            </div>
            <div class="info__number">

              <span data-speed>0</span> <span>зн./мин</span>
            </div>
          </div>
          <div class="info__item">
            <div class="info__name">
            <img class="info__icon" src="../src/assets/img/target.svg" alt="print-score"/>
              <span>Точность</span>
            </div>
            <div class="info__number"><span data-accuracy>100</span> <span>%</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
}