import {Printer} from '@/components/Printer'
import {Header} from '@/components/UI/Header'
import {Footer} from '@/components/UI/Footer'
import { TestStartModal } from '@/components/TestStartModal'
import { TestingPrint } from '@/components/TestingPrint'

export class TestTypingPage{

  getRoot(){
    this.printer = new Printer({
      components: [Header, TestingPrint, TestStartModal, Footer]
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