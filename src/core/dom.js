class Dom {
  createElement({ tag, classNames = [], text = '' }) {
    const $el = document.createElement(tag)

    if (text) $el.textContent = text
    if (classNames.length) {
      classNames.forEach((className) => $el.classList.add(className))
    }

    return $el
  }

  toggleClass($el, method, classNames = []) {
    classNames.forEach((className) => {
      $el.classList[method](className)
    })
  }

  html($el,value){
    $el.innerHTML = value
  }

  findAll(el, selector){
    if(el){
      return el.querySelectorAll(selector)
    }else{
      return document.querySelectorAll(selector)
    }
  }
}

export const $ = new Dom()

