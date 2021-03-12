import { PrinterComponent } from "@core/PrinterComponent"

export class Modal extends PrinterComponent{
  constructor($root, options = {}){
    super($root, options)
    this.$root = $root
  }

}