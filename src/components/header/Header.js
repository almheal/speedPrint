import {headerTemplate} from './header.template'

export class Header{
  static className = 'header'
  static tag = 'header'

  constructor($root){
    this.$root = $root
  }

  toHTML(){
    const template = headerTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    return this.$root
  }

  destroy(){
    this.$root.remove()
  }
}