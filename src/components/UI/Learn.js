import {learnTemplate} from '../templates/learn.template'

export class Learn{
  static className = ['learn', 'section']
  static tag = 'section'

  constructor($root){
    this.$root = $root
  }

  toHTML(){
    const template = learnTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }

  destroy(){
    this.$root.remove()
  }
}