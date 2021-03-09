import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import {Print} from '@/components/print/Print'
import { StartPrintModal } from '@/components/printModal/StartPrintModal'

export class HomePage{

  getRoot(){
    this.printer = new Printer({
      components: [Header, Print, StartPrintModal]
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