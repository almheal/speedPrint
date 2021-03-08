import { randomItemArray } from '@core/utils'
import { checkKeyCode } from '@core/utils'
import { todayDate } from '@core/utils'
import { printTemplate } from './print.template'
import { textPrint } from '@/mocks/text'
import { $ } from '@core/dom'
import { PrinterComponent } from '../../core/PrinterComponent'
import * as actions from '@/store/actions'

export class Print extends PrinterComponent {
  static className = 'print'
  static tag = 'section'

  constructor($root, options) {
    super($root, options)
    this.$root = $root
    this.$accuracy = null
    this.$speed = null
    this.speed = null
    this.accuracy = null
    this.print = null
    this.time = null
    this.printText = this.printText.bind(this)
    this.preventDefaultKey = this.preventDefaultKey.bind(this)
  }

  init() {
    window.addEventListener('keyup', this.printText)
    window.addEventListener('keydown', this.preventDefaultKey)
    super.init()
  }

  preventDefaultKey(e) {
    if (e.code === 'Space' || e.code === 'Tab') {
      e.preventDefault()
    }
  }

  // listener keyup print
  printText(e) {
    if (!this.print.dataset.print) return
    if (!checkKeyCode(e.keyCode)) return

    const activeSymbol = this.print.querySelector('.active')
    const key = e.key

    if (!activeSymbol.nextElementSibling) {
      const data = { speed: this.speed, accuracy: this.accuracy, date: todayDate() }
      this.$dispatch(actions.calculateResult(data))
      window.location.href = '/#completed'
      return
    }

    if (!this.time) {
      this.time = this.speedScore()
    }

    this.speed = this.time()

    if (key === activeSymbol.textContent) {
      this.changeNextSymbol(activeSymbol)
      this.$speed.textContent = this.speed
      this.accuracy = this.accuracyScore()
      this.$accuracy.textContent = this.accuracy
    } else {
      $.toggleClass(activeSymbol, 'add', ['error'])
      this.accuracy = this.accuracyScore(true)
      this.$accuracy.textContent = this.accuracy
    }
  }

  // change active symbol
  changeNextSymbol(activeSymbol) {
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
    this.$speed = speed
    this.$accuracy = accuracy
    this.accuracyScore = this.accuracyScore()

    textEl.textContent = ''
    textEl.append(spanList)
  }

  //calculate speed print
  speedScore() {
    const time = Date.now() / 1000
    let lettersLength = 0

    return function () {
      if (!lettersLength) {
        lettersLength++
        return 0
      }
      const difference = Date.now() / 1000 - time

      lettersLength++

      const score = Math.ceil((60 / difference) * lettersLength)

      return score <= 0 ? 0 : score
    }
  }

  //calculate accuracy print
  accuracyScore() {
    let lengthLetters = 0
    let wrongPrint = 0

    return function (value = '') {
      if (value) {
        wrongPrint++
      }

      lengthLetters++

      let accuracy

      if (wrongPrint) {
        accuracy = Math.ceil(100 - (100 * wrongPrint) / lengthLetters)
      } else {
        accuracy = 100
      }

      return accuracy
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

  // template class
  toHTML() {
    const template = printTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    this.startingText()
    return this.$root
  }

  destroy() {
    window.removeEventListener('keydown', this.preventDefaultKey)
    window.removeEventListener('keyup', this.printText)
    super.destroy()
  }
}