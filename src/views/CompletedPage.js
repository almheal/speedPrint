import {Page} from '@core/router/Page'
import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'

export class CompletedPage extends Page{

  getRoot(){
    this.printer = new Printer({components: [Header]})

    return  this.printer.getRoot()
  }

  toHTML(){
    
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}