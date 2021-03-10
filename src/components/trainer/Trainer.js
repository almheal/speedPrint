import {PrinterComponent} from '@core/PrinterComponent'
import { trainerTemplate } from './trainer.template'

export class Trainer extends PrinterComponent{
  static className = 'trainer'

  constructor($root, options){
    super($root, options)
    this.$root = $root
  }

  //html template component
  toHTML(){
    const template = trainerTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }
}