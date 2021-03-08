import { $ } from '@core/dom'
import { createStore } from '@core/createStore'
import { rootReducer } from '@/store/rootReducer'
import { StoreSubscriber } from '../core/StoreSubscriber'

const store = createStore(rootReducer, {
  result: {
    speed: 0,
    accuracy: 0
  },
})

export class Printer {
  constructor({ components }) {
    this.components = components || []
    this.subscriber = new StoreSubscriber(store)
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

      const componentOptions = {
        store,
      }

      const component = new Component($el, componentOptions)
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
    this.subscriber.subscribeComponents(this.components)
  }

  destroy() {
    this.components.forEach((component) => component.destroy())
  }
}
