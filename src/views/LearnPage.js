import {Printer} from '@/components/Printer'
import {Header} from '@/components/UI/Header'
import {Footer} from '@/components/UI/Footer'
import {Learn} from '@/components/UI/Learn'

export class LearnPage{

  getRoot(){
    this.printer = new Printer({components: [Header, Learn, Footer]})


    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}