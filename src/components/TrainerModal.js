import { Modal } from "./Modal";
import { trainerModal } from "./templates/trainerModal.template";

export class TrainerModal extends Modal{
  static className = ['tutor__modal']

  constructor($root, options = {}){
    super($root, {...options, listeners: ['click']})
    this.$root = $root
  }

  //html template component
  toHTML(){
    const template = trainerModal()
    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }

  init(){
    super.init()
    return this.toHTML()
  }

  //handler continue typing text
  onClick(e){
    if(e.target.dataset.continue){
      super.destroy()
    }
  }
}