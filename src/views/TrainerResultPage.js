import {Header} from '@/components/UI/Header'
import {Footer} from '@/components/UI/Footer'
import {Printer} from '@/components/Printer'
import { TrainerResult } from '../components/TrainerResult'

export class TrainerResultPage{
  getRoot(){
    this.printer = new Printer({components: [Header, TrainerResult, Footer]})

    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}