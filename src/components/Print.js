import { checkKeyCode } from '@core/utils'
import { $ } from '@core/dom'
import { PrinterComponent } from '../core/PrinterComponent'

export class Print extends PrinterComponent {
  static className = 'print'
  static tag = 'section'

  constructor($root, options) {
    super($root, options)
    this.$root = $root
    this.prevSymbolsLength = 0
    this.speed = 0
    this.speedFunc = null
    this.accuracyFunc = null
    this.accuracy = 100
    this.printText = this.printText.bind(this)
  }


  init() {
    window.addEventListener('keyup', this.printText)
    window.addEventListener('keydown', this.preventDefaultKey)
    super.init()
  }

  //prevent keys
  preventDefaultKey(e) {
    if (e.code === 'Space' || e.code === 'Tab') {
      e.preventDefault()
    }
  }

  // listener keyup print
  printText(e) {
    if(checkKeyCode(e.keyCode)) return
    const currentSymbol = this.$print.querySelector('.active')
    const key = e.key

    if(!currentSymbol.nextElementSibling){
      this.finishPrint()
      return
    }

    if(!this.speedFunc){
      this.speedFunc = this.speedScore()
    }

    if(!this.accuracyFunc){
      this.accuracyFunc = this.accuracyScore()
    }

    if(currentSymbol.textContent === key){
      this.prevSymbolsLength++
      this.successPrint(currentSymbol)
      this.speed = this.speedFunc()
      this.accuracy = this.accuracyFunc()
    }else{
      this.errorPrint(currentSymbol, key)
      this.accuracy = this.accuracyFunc(true)
    }


  }

  // handling an incorrectly pressed key
  errorPrint(currentSymbol, pressKey){
    if(!currentSymbol.classList.contains('error')){
      $.toggleClass(currentSymbol, 'add', ['error'])
    }
  }

  // handling a correctly pressed key
  successPrint(currentSymbol){
    this.changeNextSymbol(currentSymbol)
  }

  //handling finish typing text
  finishPrint(){

  }

  // change active symbol
  changeNextSymbol(currentSymbol) {
    const nextSymbol = currentSymbol.nextElementSibling
    $.toggleClass(currentSymbol, 'remove', ['active'])
    $.toggleClass(currentSymbol, 'add', ['prev'])
    $.toggleClass(nextSymbol, 'add', ['active'])
  }

  //calculate speed print
  speedScore() {
    const time = Date.now() / 1000

    return function () {
      if(this.prevSymbolsLength < 2) return 0
      const difference = Date.now() / 1000 - time

      const score = Math.ceil((60 / difference) * this.prevSymbolsLength)

      return score <= 0 ? 0 : score
    }
  }

  //calculate accuracy print
  accuracyScore() {
    let errorPrint = 0

    return function(value){
      if(value){
        errorPrint++
      }

      let accuracy

      if(errorPrint && this.prevSymbolsLength > 1){
        accuracy = Math.ceil(100 - (100 * errorPrint) / this.prevSymbolsLength)
      }else{
        accuracy = 100
      }

      return accuracy > 0 ? accuracy : 0
    }

  }

  // transform text to span
  transformToSpan(text) {
    const splitText = text.trim().split('')
    const fragment = document.createDocumentFragment()

    splitText.forEach((letter, index) => {
      const span = $.createElement({ tag: 'span', text: letter })
      if (index === 0) {
        $.toggleClass(span, 'add', ['active'])
      }
      fragment.append(span)
    })

    return fragment
  }

  destroy() {
    window.removeEventListener('keydown', this.preventDefaultKey)
    window.removeEventListener('keyup', this.printText)
    super.destroy()
  }
}