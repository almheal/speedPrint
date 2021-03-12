import { PrinterComponent } from "@core/PrinterComponent"
import { footerTemplate } from "../templates/footer.template"

export class Footer extends PrinterComponent{
  static className = ['footer']
  static tag = 'footer'

  constructor($root, options){
    super($root, options)
    this.$root = $root
  }

  toHTML(){
    const template = footerTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }
}