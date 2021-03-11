import { keyboardTemplate } from "../keyboard.template";


export function tutorTemplate() {
  return `<div class="tutor__inner">
  <div class="tutor__header">
    <div class="tutor__input">
      <input class="input" type="text" readonly/>
      <div class="tutor__text" data-print>напечатай этот текст и узнай свою скорость печати</div>
    </div>
  </div>
  <div class="tutor__body" data-tutor-body>

  </div>
</div>`
}


