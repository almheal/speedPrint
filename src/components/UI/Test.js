import { testTemplate } from "../templates/test.template";

export class Test{
  static className = ['test', 'section']
  static tag = 'section'

  constructor($root){
    this.$root = $root
  }

  toHTML(){
    const template = testTemplate()

    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }

  destroy(){
    this.$root.remove()
  }
}