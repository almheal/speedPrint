import {Printer} from '@/components/Printer'
import {Header} from '@/components/UI/Header'
import {Footer} from '@/components/UI/Footer'
import { TrainerPrint } from '@/components/TrainerPrint'

export class TrainerTypingPage{

  getRoot(){
    this.printer = new Printer({components: [Header, TrainerPrint, Footer]})

    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}