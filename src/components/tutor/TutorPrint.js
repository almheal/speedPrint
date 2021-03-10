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

  toHTML(){
    const template = tutorTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    this.$print = this.$root.querySelector('[data-print]')
    this.$keyboard = this.$root.querySelector('[data-keyboard]')

    this.renderText(this.$print, this.$print.textContent)

    const firstKey = this.searchCurrentKey()
    this.toggleClassKey(firstKey.textContent,'add', ['active'])

    return this.$root
  }

  renderText($el, text){
    const spanText = this.transformToSpan(text)
    $el.innerHTML = ''
    $el.append(spanText)
  }

  printText(e){
    const key = e.key
    if(this.anotherLanguageKey(key)){
      this.createDangerModal()
      return
    }
    super.printText(e)
  }

  errorPrint(activeSymbol, errorKey){
    super.errorPrint(activeSymbol, errorKey)
    if(errorKey === ' '){
      errorKey = 'space'
    }
    this.toggleClassKey(errorKey, 'add', ['error'])
    setTimeout(()=>{
      this.toggleClassKey(errorKey, 'remove', ['error'])
    }, 150)
  }


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
    this.toggleClassKey(currentKey, 'remove', ['active'])
    this.toggleClassKey(nextKey, 'add', ['active'])
  }

  createDangerModal(){
    const checkModal = this.$root.querySelector('.tutor__modal')
    if(checkModal) return
    const $el = $.createElement({tag: 'div', classNames: [TutorModal.className]})
    const dangerModal = new TutorModal($el)
    this.$root.append(dangerModal.init())
  }

  searchKey(key){
    const $key = this.$keyboard.querySelector(`[data-key="${key}"]`)
    return $key
  }

  toggleClassKey(key, method,  classNames){
    const $key = this.searchKey(key)
    $.toggleClass($key, method, classNames)
  }

  searchCurrentKey(){
    return this.$print.querySelector('.active')
  }

  anotherLanguageKey(key){
    return englishKeys.includes(key.toLowerCase())
  }
}