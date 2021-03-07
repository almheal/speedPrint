import './assets/styles/scss/index.scss'
import { Printer } from '@/components/Printer'
import { Header } from '@/components/header/Header'
import { Print } from '@/components/print/Print'
import { StartPrintModal } from '@/components/printModal/StartPrintModal'

const printer = new Printer('#app', [Header, Print, StartPrintModal])

printer.render()
