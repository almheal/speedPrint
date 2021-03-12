import {DomListeners} from '@core/DomListeners'

//parent for components
export class PrinterComponent extends DomListeners{
  constructor($root, options = {}){
    super($root, options.listeners)
    this.$root = $root
    this.store = options.store
    this.subscribe = options.subscribe || []
  }

  // html template
  toHTML(){
    return ''
  }

  //init listeners
  init(){
    this.initListeners()
  }

  //call store dispatch
  $dispatch(action){
    this.store.dispatch(action)
  }

  //changed in store
  storeChanged(){

  }

  //get state
  $getState(){
    return this.store.getState()
  }

  // check key in subscribe component
  isWatching(key){
    return this.subscribe.includes(key)
  }

  //destroy component and listeners
  destroy(){
    this.removeListeners()
    this.$root.remove()
  }
}