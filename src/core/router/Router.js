import { ActiveRoute } from './ActiveRoute'
import { $ } from '@core/dom'

export class Router {
  constructor(selector, routes) {
    this.$placeholder = document.querySelector(selector)
    this.routes = routes

    this.changePageHandler = this.changePageHandler.bind(this)

    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler() {
    if (this.page) {
      this.page.destroy()
    }

    $.html(this.$placeholder, '')


    const [route] = this.routes.filter(({ path, component}) => {
      if(path.slice(1) === '/' && ActiveRoute.path === '' || path.slice(1) === ActiveRoute.path){
        return component
      }
    })

    // if(!route) return

    const Page = route.component

    this.page = new Page()


    this.$placeholder.append(this.page.getRoot())
    this.page.afterRender()
  }
}
