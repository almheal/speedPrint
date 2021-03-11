import {Print} from '@/components/print/Print'
import { tutorTemplate } from './tutor.template'
import {$} from '@core/dom'
import {englishKeys} from '@/mocks/englishKeys'
import { TutorModal } from './tutorDangerModal'
import { changeTutorResult } from '../../store/actions'
import { Keyboard } from '../Keyboard'

export class TutorPrint extends Print{
  static className = 'tutor__print'
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
    const template = tutorTemplate()
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
    window.location.href = '/#tutor-result'
    this.$dispatch(changeTutorResult(this.speed))
  }

  //create danger modal, when user pressed key !== selected language
  createDangerModal(){
    const checkModal = this.$root.querySelector('.tutor__modal')
    if(checkModal) return
    const $el = $.createElement({tag: 'div', classNames: [TutorModal.className]})
    const dangerModal = new TutorModal($el)
    this.$root.append(dangerModal.init())
  }

  //search current key
  searchCurrentKey(){
    return this.$print.querySelector('.active')
  }

  //check language pressed key
  anotherLanguageKey(key){
    return englishKeys.includes(key.toLowerCase())
  }
}