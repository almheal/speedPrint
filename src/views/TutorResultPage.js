import {Header} from '@/components/header/Header'
import {Printer} from '@/components/Printer'
import { TutorResult } from '../components/TutorResult'

export class TutorResultPage{
  getRoot(){
    this.printer = new Printer({components: [Header, TutorResult]})

    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}