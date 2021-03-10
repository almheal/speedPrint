import { PrinterComponent } from '../../core/PrinterComponent'
import { completedTemplate } from './completed.template'
import { $ } from '@core/dom'

export class Completed extends PrinterComponent {
  static className = 'completed'

  constructor($root, options = {}) {
    super($root, options)
    this.$root = $root
  }

  toHTML() {
    const template = completedTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    return this.$root
  }

  init() {
    const { result, languagePrint } = this.$getState()
    if(!languagePrint){
      this.changeCompletedResult(result, 'ru')
    }else{
      this.changeCompletedResult(result, languagePrint)
    }
    super.init()
  }

  changeCompletedResult({ speed, accuracy, date }, language) {
    const speedItems = $.findAll(this.$root, '[data-speed]')
    const accuracyItems = $.findAll(this.$root, '[data-accuracy]')
    const dateCerfiticate = this.$root.querySelector('[data-certificate-date]')
    const languageItem = this.$root.querySelector('[data-language]')

    if(language === 'en'){
      languageItem.textContent = 'английском языке'
    }
    if(language === 'ru'){
      languageItem.textContent = 'русском языке'
    }

    speedItems.forEach((item) => (item.textContent = speed))
    accuracyItems.forEach((item) => (item.textContent = accuracy))
    dateCerfiticate.textContent = date
  }
}
