import { Print } from '@/components/Print'
import { trainerPrintTemplate } from './templates/trainerPrint.template'
import {$} from '@core/dom'
import { englishKeys } from '@/mocks/englishKeys'
import { TrainerModal } from './TrainerModal'
import { changeTutorResult } from '@/store/actions'
import { Keyboard } from './Keyboard'

export class TrainerPrint extends Print{
  static className = ['tutor__print','section']
  static tag = 'section'

  constructor($root, options){
    super($root, options)
    this.$root = $root
    this.$print = null
    this.$keyboard = null
    this.Keyboard = new Keyboard()
  }


  //html template component
  toHTML(){
    const template = trainerPrintTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    this.$print = this.$root.querySelector('[data-print]')

    const wrapperKeyboard = this.$root.querySelector('[data-tutor-body]')
    wrapperKeyboard.append(this.Keyboard.toHTML())

    this.renderText(this.$print, this.$print.textContent)

    const firstKey = this.searchCurrentKey()

    this.Keyboard.toggleClassOnKeyboard(firstKey.textContent, 'add', ['active'])
    return this.$root
  }

  //render starting text
  renderText($el, text){
    const spanText = this.transformToSpan(text)
    $el.innerHTML = ''
    $el.append(spanText)
  }

  //handler keydown, if key !== selected language, throw danger modal
  printText(e){
    const key = e.key
    if(this.anotherLanguageKey(key)){
      this.createDangerModal()
      return
    }
    super.printText(e)
    if(this.prevSymbolsLength === 1){
      this.hideHands()
    }
  }

  // handling an incorrectly key pressed, add keyboard animation error
  errorPrint(activeSymbol, errorKey){
    super.errorPrint(activeSymbol, errorKey)
    if(errorKey === ' '){
      errorKey = 'space'
    }
    this.Keyboard.toggleClassOnKeyboard(errorKey, 'add', ['error'])
    setTimeout(()=>{
      this.Keyboard.toggleClassOnKeyboard(errorKey, 'remove', ['error'])
    }, 150)
  }


  //handling a correctly pressed key
  successPrint(activeSymbol){
    super.successPrint(activeSymbol)
    let nextKey = activeSymbol.nextElementSibling.textContent

    let currentKey = activeSymbol.textContent

    if(nextKey === ' '){
      nextKey = 'space'
    }
    if(currentKey === ' '){
      currentKey = 'space'
    }
    this.Keyboard.toggleClassOnKeyboard(currentKey, 'remove', ['active'])
    this.Keyboard.toggleClassOnKeyboard(nextKey, 'add', ['active'])
  }

  // finish typing text
  finishPrint(){
    window.location.href = '/#trainer-result'
    this.$dispatch(changeTutorResult(this.speed))
  }

  //create danger modal, when user pressed key !== selected language
  createDangerModal(){
    const checkModal = this.$root.querySelector('.tutor__modal')
    if(checkModal) return
    const $el = $.createElement({tag: 'div', classNames: [TrainerModal.className]})
    const dangerModal = new TrainerModal($el)
    this.$root.append(dangerModal.init())
  }

  //search current key
  searchCurrentKey(){
    return this.$print.querySelector('.active')
  }

  hideHands(){
    const handsImg = this.$root.querySelector('[data-hands]')
    handsImg.style.opacity = '0'
    setTimeout(()=>{
      handsImg.style.display = 'none'
    },250)
  }

  //check language pressed key
  anotherLanguageKey(key){
    return englishKeys.includes(key.toLowerCase())
  }
}