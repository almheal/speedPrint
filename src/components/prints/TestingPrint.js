import { Print } from '../print/Print'
import { testingPrintTemplate } from './testing.template'
import { textPrintRu } from '@/mocks/textRu'
import { textPrintEn } from '@/mocks/textEn'
import { randomItemArray } from '@core/utils'
import { calculateResult } from '../../store/actions'

export class TestingPrint extends Print {
  static className = 'testing__print'
  static tag = 'section'

  constructor($root, options) {
    super($root, options)
    this.$root = $root
    this.speedInterval = null
    this.subscribe = ['languagePrint']
  }

  toHTML() {
    const template = testingPrintTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    const {languagePrint} = this.$getState()
    const defaultLanguage = languagePrint || 'ru'

    const $print = this.$root.querySelector('[data-print]')
    this.renderText($print, defaultLanguage)

    return this.$root
  }

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

  storeChanged({languagePrint}){
    this.$print = document.querySelector('[data-print]')
    this.renderText(this.$print, languagePrint)
  }

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

  speedToHTML(speed){
    const $speed = this.$root.querySelector('[data-speed]')
    if(speed === 0) return
    $speed.textContent = speed
  }

  accuracyToHTML(accuracy){
    const $accuracy = this.$root.querySelector('[data-accuracy]')
    $accuracy.textContent = accuracy
  }

  finishPrint(){
    clearInterval(this.speedInterval)
    window.location.href = '/#completed'
    this.$dispatch(calculateResult({speed: this.speed, accuracy: this.accuracy}))
  }

}
