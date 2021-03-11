import './assets/styles/scss/index.scss'
import { store } from './components/Printer'
import { Router } from './core/router/Router'
import { CompletedPage } from './views/CompletedPage'
import { HomePage } from './views/HomePage'
import { LearnPage } from './views/LearnPage'
import { TestPage } from './views/TestPage'
import { TestTypingPage } from './views/TestTypingPage'
import { TrainerTypingPage } from './views/TrainerTypingPage'
import { TrainerResultPage } from './views/TrainerResultPage'


const router = new Router('#app',[
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/test-completed',
    component: CompletedPage
  },
  {
    path: '/test',
    component: TestPage
  },
  {
    path: '/test-typing',
    component: TestTypingPage
  },
  {
    path: '/learn',
    component: LearnPage
  },
  {
    path: '/trainer-typing',
    component: TrainerTypingPage
  },
  {
    path: '/trainer-result',
    component: TrainerResultPage
  }
])

router.beforeEach((to, next)=>{
  const {tutorResult, result} = store.getState()
  if(to === 'trainer-result' && !tutorResult){
    router.redirect('/')
  }else if(to === 'test-completed' && !result.speed && !result.accuracy){
    router.redirect('/#test-typing')
  }else{
    next()
  }
})

router.init()

