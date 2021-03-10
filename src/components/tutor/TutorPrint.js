import {Print} from '@/components/print/Print'
import { tutorTemplate } from './tutor.template'
import {$} from '@core/dom'
import {englishKeys} from '@/mocks/englishKeys'
import { TutorModal } from './tutorDangerModal'

export class TutorPrint extends Print{
  static className = 'tutor__print'
  static tag = 'section'

  constructor($root, options){
    super($root, options)
    this.$root = $root
    this.$print = null
    this.$keyboard = null
  }


  //html template component
  toHTML(){
    const template = tutorTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    this.$print = this.$root.querySelector('[data-print]')
    this.$keyboard = this.$root.querySelector('[data-keyboard]')

    this.renderText(this.$print, this.$print.textContent)

    const firstKey = this.searchCurrentKey()
    this.toggleClassOnKeyboard(firstKey.textContent,'add', ['active'])

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
    this.toggleClassOnKeyboard(errorKey, 'add', ['error'])
    setTimeout(()=>{
      this.toggleClassOnKeyboard(errorKey, 'remove', ['error'])
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
    this.toggleClassOnKeyboard(currentKey, 'remove', ['active'])
    this.toggleClassOnKeyboard(nextKey, 'add', ['active'])
  }

  //create danger modal, when user pressed key !== selected language
  createDangerModal(){
    const checkModal = this.$root.querySelector('.tutor__modal')
    if(checkModal) return
    const $el = $.createElement({tag: 'div', classNames: [TutorModal.className]})
    const dangerModal = new TutorModal($el)
    this.$root.append(dangerModal.init())
  }

  // search key in keyboard
  searchKeyOnKeyboard(key){
    const $key = this.$keyboard.querySelector(`[data-key="${key}"]`)
    return $key
  }

  //add or remove classNames key on keyboard
  toggleClassOnKeyboard(key, method,  classNames){
    const $key = this.searchKeyOnKeyboard(key)
    $.toggleClass($key, method, classNames)
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