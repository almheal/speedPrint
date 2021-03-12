import { keyboardTemplate } from "./templates/keyboard.template";
import {$} from '@core/dom'

export class Keyboard{
  constructor(){
    this.$keyboard = null
  }

  toHTML(){
    const template = keyboardTemplate()
    this.$keyboard = $.createElement({tag: 'div', classNames: ['keyboard']})
    this.$keyboard.insertAdjacentHTML('afterbegin', template)
    return this.$keyboard
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
}