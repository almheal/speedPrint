import randomItemArray from '@/utils/randomItemArray'
import checkKeyCode from '@/utils/checkKeyCode'
import { printTemplate } from './print.template'
import { textPrint } from '@/mocks/text'
import {$} from '@core/dom'
import { PrinterComponent } from '../../core/PrinterComponent'

export class Print extends PrinterComponent {
  static className = 'print'
  static tag = 'section'

  constructor($root) {
    super($root)
    this.$root = $root
    this.print = null
    this.accuracy = null
    this.speed = null
    this.printText = this.printText.bind(this)
    this.preventDefaultKey = this.preventDefaultKey.bind(this)
  }

  init() {
    window.addEventListener('keyup', this.printText)
    window.addEventListener('keydown', this.preventDefaultKey)
    super.init()
  }


  preventDefaultKey(e){
    if(e.code === 'Space' || e.code === 'Tab'){
      e.preventDefault()
    }
  }

  // listener keyup print
  printText(e) {
    if(!this.print.dataset.print) return
    if(!checkKeyCode(e.keyCode)) return

    const activeSymbol = this.print.querySelector('.active')
    const key = e.key

    if(!activeSymbol.nextElementSibling){
      window.location.href = '/#completed'
      return
    }


    if(key === activeSymbol.textContent){
      this.changeNextSymbol(activeSymbol)
      this.speed.textContent = this.speedScore()
      this.accuracy.textContent = this.accuracyScore()

    }else{
      $.toggleClass(activeSymbol, 'add', ['error'])
      this.accuracy.textContent = this.accuracyScore(true)
    }
  }


  // change active symbol
  changeNextSymbol(activeSymbol){
    const nextSymbol = activeSymbol.nextElementSibling
    $.toggleClass(activeSymbol, 'remove', ['active'])
    $.toggleClass(activeSymbol, 'add', ['color-green'])
    $.toggleClass(nextSymbol, 'add', ['active'])
  }


  // select random text from array
  startingText() {
    const randomText = randomItemArray(textPrint)
    const textEl = this.$root.querySelector('[data-print]')
    const speed = this.$root.querySelector('[data-speed]')
    const accuracy = this.$root.querySelector('[data-accuracy]')
    const spanList = this.transformToSpan(randomText)

    this.print = textEl
    this.speed = speed
    this.accuracy = accuracy

    this.speedScore = this.speedScore()
    this.accuracyScore = this.accuracyScore()

    textEl.textContent = ''
    textEl.append(spanList)
  }


  //calculate speed print
  speedScore(){
    const date = Date.now() / 1000
    let lettersLength = 1

    return function (){
      const time = Date.now() / 1000 - date

      lettersLength++

      const score = Math.ceil(60 / time * lettersLength)
      return score < 0 ? 0 : score
    }
  }

  //calculate accuracy print
  accuracyScore(){
    let lengthLetters = 0
    let wrongPrint = 0

    return function (value = '') {
      if (value) {
        wrongPrint++
      }

      lengthLetters++

      let accuracyScore

      if (wrongPrint) {
         accuracyScore = Math.ceil(100 - 100 * wrongPrint / lengthLetters)
      } else {
        accuracyScore = 100
      }

      return accuracyScore
    }
  }


  // transform text to span
  transformToSpan(text){
    const splitText = text.trim().split('')
    const fragment = document.createDocumentFragment()

    splitText.forEach((letter, index) =>{
      const span = $.createElement({tag: 'span', text: letter})
      if(index === 0){
        $.toggleClass(span, 'add', ['active'])
      }
      fragment.append(span)
    })

    return fragment
  }

  // template class
  toHTML() {
    const template = printTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    this.startingText()
    return this.$root
  }


  destroy(){
    window.removeEventListener('keydown', this.preventDefaultKey)
    window.removeEventListener('keyup', this.printText)
    super.destroy()
  }
}
