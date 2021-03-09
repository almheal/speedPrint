import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import { Trainer } from '../components/trainer/Trainer'

export class TrainerPage{

  getRoot(){
    this.printer = new Printer({
      components: [Header, Trainer]
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