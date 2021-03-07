import { DomListeners } from "@core/DomListeners"

export class Modal extends DomListeners{
  static className = 'modal'

  constructor($root, listeners){
    super($root, listeners)
    this.$root = $root
  }

  open(){
    this.$root.style.display = 'block'
  }

  close(){
    this.$root.style.display = 'none'
  }

  destroy(){
    this.$root.remove()
  }
}