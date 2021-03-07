import { Modal } from '@/components/modal/Modal'
import { startPrintTemplate } from './print.modal.template'

export class StartPrintModal extends Modal {
  constructor($root) {
    super($root, ['click'])
    this.$root = $root
  }

  toHTML() {
    const template = startPrintTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    return this.$root
  }

  onClick(e) {
    if (e.target.dataset.buttonStart) {
      const print = document.querySelector('[data-print]')
      print.dataset.print = 'true'
      this.destroy()
    }
  }

  initListeners() {
    super.initListeners()
  }
}
