import { PrinterComponent } from "../../core/PrinterComponent"

export class Modal extends PrinterComponent{
  static className = 'modal'

  constructor($root, options = {}){
    super($root, options)
    this.$root = $root
  }

  
}