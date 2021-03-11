import { trainerTemplate } from '../templates/trainer.template'

export class Trainer{
  static className = ['trainer', 'section']

  constructor($root){
    this.$root = $root
  }

  //html template component
  toHTML(){
    const template = trainerTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }

  destroy(){
    this.$root.remove()
  }
}