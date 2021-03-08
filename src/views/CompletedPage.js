import {Page} from '@core/router/Page'
import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import { Completed } from '../components/completed/Completed'

export class CompletedPage extends Page{

  getRoot(){

    this.printer = new Printer({components: [Header, Completed]})
    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}