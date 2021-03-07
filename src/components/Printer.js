import {$} from '@core/dom'

export class Printer {
  constructor({ components }) {
    this.components = components || []
  }

  getRoot() {
    const $root = $.createElement({ tag: 'div', classNames: ['printer'] })

    this.components = this.components.map((Component) => {
      let $el

      if (Component.tag) {
        $el = $.createElement({
          tag: Component.tag,
          classNames: [Component.className],
        })
      } else {
        $el = $.createElement({
          tag: 'div',
          classNames: [Component.className],
        })
      }

      const component = new Component($el)
      $root.append(component.toHTML())
      return component
    })

    return $root
  }

  init() {
    this.components.forEach((component) => {
      if (component.init) {
        component.init()
      }
    })
  }

  destroy(){
    this.components.forEach(component => component.destroy())
  }
}
