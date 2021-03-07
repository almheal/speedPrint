import {Page} from '@core/router/Page'
import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import {completedTemplate} from '@/views/completed.template'

export class CompletedPage extends Page{

  getRoot(){
    this.printer = new Printer({components: [Header]})
    // this.toHTML()
    const $root = this.printer.getRoot()

    $root.insertAdjacentHTML('beforeend', this.toHTML())

    return  $root
  }

  toHTML(){
    const template = completedTemplate()
    return template
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}