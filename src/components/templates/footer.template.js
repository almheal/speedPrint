const items = ['О нас', 'Контакты', 'Условия пользования']

export function footerTemplate(){
  return `
    <div class="container">
      <div class="footer__inner">
        <ul class="footer__list">
          ${createFooterList(items)}
        </ul>
        <div class="copy">&copy; 2021 PrintSpeed - Удобный и простой клавиатурный тренажер</div>
      </div>
    </div>
  `
}

function createFooterList(list){
  return list.map(item => {
    return `
    <li class="footer__item">
      <a class="footer-link line-hover" href="#">${item}</a>
    </li>
    `
  }).join('')
}