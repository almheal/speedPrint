import { Modal } from '@/components/modal/Modal'
import { PrintLanguage } from '../select/PrintLanguage'
import { startPrintTemplate } from './print.modal.template'

export class StartPrintModal extends Modal {
  constructor($root, options = {}) {
    super($root, { ...options, listeners: ['click'] })
    this.$root = $root
    this.select = null
    this.store = options.store
  }

  toHTML() {
    const template = startPrintTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    const wrapperSelect = this.$root.querySelector('[data-select]')
    this.select = new PrintLanguage(wrapperSelect, {store: this.store, items: ['Русская раскладка', 'Английская раскладка']})
    this.select.init()


    return this.$root
  }

  onClick(e) {
    if (e.target.dataset.buttonStart) {
      const print = document.querySelector('[data-print]')
      print.dataset.print = 'true'
      super.destroy()
      this.select.destroy()
    }
  }
}
