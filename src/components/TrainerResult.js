import {PrinterComponent} from '@core/PrinterComponent'
import { trainerResultTemplate } from './templates/trainerResult.template.js'

export class TrainerResult extends PrinterComponent{
  static className = ['tutor__result', 'section']
  static tag = 'section'

  constructor($root, options){
    super($root, options)
    this.$root = $root
  }

  toHTML(){
    const template = trainerResultTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    const $speed = this.$root.querySelector('[data-speed]')

    const {tutorResult} = this.$getState()

    $speed.textContent = tutorResult

    return this.$root
  }

}