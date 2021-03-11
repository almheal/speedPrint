import {Printer} from '@/components/Printer'
import {Header} from '@/components/UI/Header'
import {Footer} from '@/components/UI/Footer'
import { Trainer } from '@/components/UI/Trainer'

export class HomePage{

  getRoot(){
    this.printer = new Printer({
      components: [Header, Trainer, Footer]
    })

    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}