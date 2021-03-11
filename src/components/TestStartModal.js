import { Modal } from '@/components/Modal'
import { PrintLanguage } from './PrintLanguage'
import { testStartModalTemplate } from './templates/testStartModal.template'
import {printLanguages} from '@/mocks/printLanguages'

export class TestStartModal extends Modal {
  static className = ['modal']

  constructor($root, options = {}) {
    super($root, { ...options, listeners: ['click'] })
    this.$root = $root
    this.select = null
    this.store = options.store
  }

  //html template
  toHTML() {
    const template = testStartModalTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)

    const wrapperSelect = this.$root.querySelector('[data-select]')

    const {languagePrint} = this.$getState()

    const {name : placeholderSelect} = printLanguages.find(item =>
      languagePrint ? item.value === languagePrint : item.value === 'ru')

    this.select = new PrintLanguage(wrapperSelect, {
      store: this.store,
      items: printLanguages,
      placeholder: placeholderSelect
    })

    return this.$root
  }

  // handler start typing, destroy modal
  onClick(e) {
    if (e.target.dataset.buttonStart) {
      const print = document.querySelector('[data-print]')
      print.dataset.print = 'true'
      super.destroy()
      this.select.destroy()
    }
  }
}
