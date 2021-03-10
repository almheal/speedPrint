import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import { StartPrintModal } from '@/components/printModal/StartPrintModal'
import { TestingPrint } from '../components/prints/TestingPrint'

export class HomePage{

  getRoot(){
    this.printer = new Printer({
      components: [Header, TestingPrint, StartPrintModal]
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