import { ActiveRoute } from './ActiveRoute'
import { $ } from '@core/dom'

export class Router {
  constructor(selector, routes) {
    this.$placeholder = document.querySelector(selector)
    this.routes = routes
    this.beforeEachRender = null
    this.isNext = null
    this.changePageHandler = this.changePageHandler.bind(this)
    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changePageHandler)
    this.changePageHandler()
  }

  changePageHandler() {
    if(this.beforeEachRender){
      this.beforeEachRender(ActiveRoute.path, this.next.bind(this))
      if(!this.isNext) return
    }

    if (this.page) {
      this.page.destroy()
    }

    $.html(this.$placeholder, '')


    const [route] = this.routes.filter(({ path, component}) => {
      if(path.slice(1) === '/' && ActiveRoute.path === '' || path.slice(1) === ActiveRoute.path){
        return component
      }
    })

    const Page = route.component

    this.page = new Page()

    this.$placeholder.append(this.page.getRoot())
    this.page.afterRender()
    this.addActiveLinks(route.path)
    this.isNext = false
  }

  beforeEach(fn){
    this.beforeEachRender = fn.bind(this)
  }

  next(){
    this.isNext = true
  }

  redirect(url){
    window.location.href = url
  }

  addActiveLinks(activeRoute){
    const links = document.querySelectorAll('a')
    const routeWithoutHash = activeRoute.slice(1)
    links.forEach(link => {
      const href = link.getAttribute('href').slice(1)
      if(href === routeWithoutHash){
        $.toggleClass(link, 'add', ['active-route'])
      }
    })
  }

  destroy(){
    window.removeEventListener('hashchange', this.changePageHandler)
  }
}
