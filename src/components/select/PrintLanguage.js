import { languagePrint } from "../../store/actions";
import { Select } from "./Select";

export class PrintLanguage extends Select{

  constructor($root, options = {}){
    super($root, {...options, listeners: ['click']})
    this.$root = $root
    this.items = options.items
    this.placeholder = options.placeholder
  }

  init(){
    super.init()
  }

  onClick(e){
    super.onClick(e)
    if(e.target.dataset.selectItem){
      this.$dispatch(languagePrint(e.target.dataset.selectItem))
    }
  }
}