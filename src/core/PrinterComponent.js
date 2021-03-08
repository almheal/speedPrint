import {DomListeners} from '@core/DomListeners'

export class PrinterComponent extends DomListeners{
  constructor($root, options = {}){
    super($root, options.listeners)
    this.$root = $root
    this.store = options.store
    this.subscribe = options.subscribe || []
  }

  toHTML(){
    return ''
  }

  init(){
    this.initListeners()
  }

  $dispatch(action){
    this.store.dispatch(action)
  }

  storeChanged(){

  }

  $getState(){
    return this.store.getState()
  }

  isWatching(key){
    return this.subscribe.includes(key)
  }


  destroy(){
    this.removeListeners()
    this.$root.remove()
  }
}