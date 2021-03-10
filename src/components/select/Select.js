import {selectTemplate} from './select.template'
import {$} from '@core/dom'
import {PrinterComponent} from '@core/PrinterComponent'

export class Select extends PrinterComponent{
  constructor($root, options = {}){
    super($root, {...options, listeners: ['click']})
    this.$root = $root
    this.$dropdown = null
    this.placeholder = options.placeholder
    this.items = options.items
  }

  toHTML(){
    const template = selectTemplate(this.placeholder, this.items)
    this.$root.insertAdjacentHTML('afterbegin', template)

    this.$dropdown = this.$root.querySelector('[data-dropdown]')
    return this.$root
  }

  init(){
    this.toHTML()
    super.init()
  }

  onClick(e){
    if(e.target.dataset.selectPlaceholder){
      this.$dropdown.classList.toggle('open')
    }
    if(e.target.dataset.selectItem){
      const value = e.target.textContent
      const placeholder = this.$root.querySelector('[data-select-placeholder]')
      this.placeholder = value
      placeholder.textContent = value
      this.isClose()
    }
  }

  isOpen(){
    $.toggleClass(this.$dropdown, 'add', ['open'])
  }

  isClose(){
    $.toggleClass(this.$dropdown, 'remove', ['open'])
  }
}