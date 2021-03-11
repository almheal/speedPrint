import { Print } from './Print'
import { testingPrintTemplate } from './templates/testing.template'
import { textPrintRu } from '@/mocks/textRu'
import { textPrintEn } from '@/mocks/textEn'
import { randomItemArray } from '@core/utils'
import { calculateResult} from '@/store/actions'
import { todayDate } from '@core/utils'

export class TestingPrint extends Print {
  static className = ['testing__print', 'section']
  static tag = 'section'

  constructor($root, options) {
    super($root, options)
    this.$root = $root
    this.speedInterval = null
    this.subscribe = ['languagePrint']
  }

  //render html template
  toHTML() {
    const template = testingPrintTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    const {languagePrint} = this.$getState()
    const defaultLanguage = languagePrint ? languagePrint : 'ru'

    this.$print = this.$root.querySelector('[data-print]')
    this.renderText(this.$print, defaultLanguage)

    return this.$root
  }

  //render starting text for typing
  renderText($el, language){
    let randomText

    if(language === 'ru'){
      randomText = randomItemArray(textPrintRu)
    }

    if(language === 'en'){
      randomText = randomItemArray(textPrintEn)
    }

    const fragmentSpanText = this.transformToSpan(randomText)
    $el.innerHTML = ''

    $el.append(fragmentSpanText)
    return randomText
  }

  //subscribe changed store
  storeChanged({languagePrint}){
    this.$print = document.querySelector('[data-print]')
    this.renderText(this.$print, languagePrint)
  }

  // keydown handler
  printText(e) {
    if(!this.$print.dataset.print) return
    super.printText(e)
    if(this.prevSymbolsLength === 2){
      this.speedInterval = setInterval(()=> {
        this.speedToHTML(this.speedFunc())
      }, 800)
    }
    this.accuracyToHTML(this.accuracy)
  }

  // add speed score in html
  speedToHTML(speed){
    const $speed = this.$root.querySelector('[data-speed]')
    if(speed === 0) return
    $speed.textContent = speed
  }

  accuracyToHTML(accuracy){
    const $accuracy = this.$root.querySelector('[data-accuracy]')
    $accuracy.textContent = accuracy
  }

  //handling finish typing text
  finishPrint(){
    clearInterval(this.speedInterval)
    window.location.href = '/#test-completed'
    const date = todayDate()
    this.$dispatch(calculateResult({speed: this.speed, accuracy: this.accuracy, date}))
  }

}
