import $dom from '@core/dom'

export class Printer {
  constructor(selector, components) {
    this.$el = document.querySelector(selector)
    this.components = components
  }

  getRoot() {
    this.components = this.components.map((Component) => {
      let $el

      if (Component.tag) {
        $el = $dom.createElement({
          tag: Component.tag,
          classNames: [Component.className],
        })
      } else {
        $el = $dom.createElement({ tag: 'div', classNames: [Component.className] })
      }

      const component = new Component($el)

      return component
    })
  }

  render() {
    this.getRoot()

    this.components.forEach((component) => {
      this.$el.append(component.toHTML())
      if (component.initListeners) {
        component.initListeners()
      }
    })
  }
}
