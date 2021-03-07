import {DomListeners} from '@core/DomListeners'

export class PrinterComponent extends DomListeners{
  constructor($root, options = {}){
    super($root, options.listeners)
    this.$root = $root
  }

  toHTML(){
    return ''
  }

  init(){
    this.initListeners()
  }


  destroy(){
    this.removeListeners()
    this.$root.remove()
  }
}