export class Select{
  constructor(selector, options){
    this.$el = document.querySelector(selector)
    this.items = options.items
  }

  
}