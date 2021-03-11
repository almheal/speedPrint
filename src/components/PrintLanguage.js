import { languagePrint } from "../store/actions";
import {printLanguage} from './templates/printLanguage.template'
import { Select } from "./Select";

export class PrintLanguage extends Select{

  constructor($root, options = {}){
    super($root, {...options, listeners: ['click']})
    this.$root = $root
    this.items = options.items
    this.placeholder = options.placeholder

    this.init()
  }

  toHTML(){
    const template = printLanguage(this.placeholder, this.items)
    this.$root.insertAdjacentHTML('afterbegin', template)

    this.$dropdown = this.$root.querySelector('[data-dropdown]')
    return this.$root
  }

  init(){
    super.init()
    this.$root.insertAdjacentHTML('afterbegin', this.toHTML())
  }

  // handler, change language text
  onClick(e){
    super.onClick(e)
    if(e.target.dataset.selectItem){
      this.$dispatch(languagePrint(e.target.dataset.selectItem))
    }
  }
}