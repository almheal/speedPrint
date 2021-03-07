export class DomListeners {
  constructor($root, listeners = []) {
    this.$root = $root
    this.listeners = listeners
  }

  initListeners() {
    this.listeners.forEach((listener) => {
      const listenerPrefixOn = addPrefixOn(listener)

      if (!this[listenerPrefixOn]) {
        throw new Error(`${listenerPrefixOn} not declared`)
      }

      this[listenerPrefixOn] = this[listenerPrefixOn].bind(this)
      this.$root.addEventListener(listener, this[listenerPrefixOn])
    })
  }

  removeListeners() {
    this.listeners.forEach((listener) => {
      const listenerPrefixOn = addPrefixOn(listener)
      this.$root.removeEventListener(listener, this[listenerPrefixOn])
    })
  }
}

function addPrefixOn(string) {
  const stringWithPrefix = string[0].toUpperCase() + string.slice(1)
  return `on${stringWithPrefix}`
}
