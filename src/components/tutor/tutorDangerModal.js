import { Modal } from "../modal/Modal";
import { tutorModal } from "./tutorModal.template";

export class TutorModal extends Modal{
  static className = 'tutor__modal'

  constructor($root, options = {}){
    super($root, {...options, listeners: ['click']})
    this.$root = $root
  }

  toHTML(){
    const template = tutorModal()
    this.$root.insertAdjacentHTML('afterbegin', template)

    return this.$root
  }

  init(){
    super.init()
    return this.toHTML()
  }

  onClick(e){
    if(e.target.dataset.continue){
      super.destroy()
    }
  }
}