import {PrinterComponent} from '@core/PrinterComponent'
import { tutorResultTemplate } from './tutorResult.template.js'

export class TutorResult extends PrinterComponent{
  static className = 'tutor__result'
  static tag = 'section'

  constructor($root, options){
    super($root, options)
    this.$root = $root
  }

  toHTML(){
    const template = tutorResultTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    const $speed = this.$root.querySelector('[data-speed]')

    const {tutorResult} = this.$getState()

    $speed.textContent = tutorResult

    return this.$root
  }

}