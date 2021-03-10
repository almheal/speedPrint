import './assets/styles/scss/index.scss'
import { Router } from './core/router/Router'
import { CompletedPage } from './views/CompletedPage'
import { HomePage } from './views/HomePage'
import { LearnPage } from './views/LearnPage'
import { PrintTutorPage } from './views/PrintTutorPage'
import { TrainerPage } from './views/TrainerPage'


const router = new Router('#app',[
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/completed',
    component: CompletedPage
  },
  {
    path: '/trainer',
    component: TrainerPage
  },
  {
    path: '/learn',
    component: LearnPage
  },
  {
    path: '/typing-tutor',
    component: PrintTutorPage
  }
])
