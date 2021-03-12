import {Printer} from '@/components/Printer'
import {Header} from '@/components/UI/Header'
import {Footer} from '@/components/UI/Footer'
import { TestCompleted } from '@/components/TestCompleted'

export class CompletedPage{

  getRoot(){

    this.printer = new Printer({components: [Header, TestCompleted, Footer]})
    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}