import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import { TutorPrint } from '../components/tutor/TutorPrint'

export class PrintTutorPage{

  getRoot(){
    this.printer = new Printer({components: [Header, TutorPrint]})

    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}