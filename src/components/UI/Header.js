import {headerTemplate} from '../templates/header.template'
import {PrinterComponent} from '@core/PrinterComponent'

export class Header extends PrinterComponent{
  static className = ['header']
  static tag = 'header'

  constructor($root, options = {}){
    super($root)
    this.$root = $root
  }

  toHTML(){
    const template = headerTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    return this.$root
  }
}