import {Printer} from '@/components/Printer'
import {Header} from '@/components/UI/Header'
import { Test } from '../components/UI/Test'
import { Footer } from '../components/UI/Footer'

export class TestPage{

  getRoot(){
    this.printer = new Printer({components: [Header, Test, Footer]})

    return this.printer.getRoot()
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}