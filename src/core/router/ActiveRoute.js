export class ActiveRoute{
  static get path(){
    return window.location.hash.split('').slice(1).join('')
  }
}