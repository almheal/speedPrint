import { PrinterComponent } from '../../core/PrinterComponent'
import { completedTemplate } from './completed.template'
import { $ } from '@core/dom'

export class Completed extends PrinterComponent {
  static className = 'completed'

  constructor($root, options = {}) {
    super($root, options)
    this.$root = $root
  }

  toHTML() {
    const template = completedTemplate()
    this.$root.insertAdjacentHTML('afterbegin', template)
    return this.$root
  }

  init() {
    const { result } = this.$getState()
    this.changeCompletedResult(result)
    super.init()
  }

  changeCompletedResult({ speed, accuracy, date }) {
    const speedItems = $.findAll(this.$root, '[data-speed]')
    const accuracyItems = $.findAll(this.$root, '[data-accuracy]')
    const dateCerfiticate = this.$root.querySelector('[data-certificate-date]')
    speedItems.forEach((item) => (item.textContent = speed))
    accuracyItems.forEach((item) => (item.textContent = accuracy))
    dateCerfiticate.textContent = date
  }
}
