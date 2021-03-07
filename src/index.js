import './assets/styles/scss/index.scss'
import { Router } from './core/router/Router'
import { CompletedPage } from './views/CompletedPage'
import { HomePage } from './views/HomePage'



const router = new Router('#app',[
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/completed',
    component: CompletedPage
  }
])
