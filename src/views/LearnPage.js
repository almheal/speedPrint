import {Printer} from '@/components/Printer'
import {Header} from '@/components/header/Header'
import { learnTemplate } from '../components/learn/learn.template'

export class LearnPage{

  getRoot(){
    this.printer = new Printer({components: [Header]})
    const template = learnTemplate()

    const $root = this.printer.getRoot()
    $root.insertAdjacentHTML('beforeend', template)
    
    return $root
  }

  afterRender(){
    this.printer.init()
  }

  destroy(){
    this.printer.destroy()
  }
}