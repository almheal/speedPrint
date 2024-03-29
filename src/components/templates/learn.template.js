import position from '../../assets/img/learn-position.png'
import main_keys from '../../assets/img/main_keys.png'
import keyboard from '../../assets/img/keyboard.png'



export function learnTemplate() {
  return `

  <div class="container">
  <div class="learn__inner">
    <div class="learn__header">
    <h3 class="learn__title">Узнай, как печатать вслепую</h3>
    <h5 class="learn__subtitle">Главная идея слепой печати в том, что за каждым пальцем закреплена своя зона клавиш. Это позволяет печатать не глядя на клавиатуру. Регулярно тренируйся и, благодаря мышечной памяти, все твои десять пальцев будут знать, куда нажать.</h5>
    </div>
    <div class="learn__body">
      <div class="learn__section">
        <div class="learn__name">Поза при печати текста</div>
        <div class="learn__content">
          <ul class="learn__list">
            <li class="learn__item">Сиди ровно и держи спину прямой.</li>
            <li class="learn__item">Локти держи согнутыми под прямым углом.</li>
            <li class="learn__item">Голова должна быть немного наклонена вперед.</li>
            <li class="learn__item">Расстояние от глаз до экрана должно быть 45-70 см.</li>
            <li class="learn__item">Расслабь мышцы плеч, рук и кистей. Кисти могут немного касаться стола в нижней части клавиатуры, но не переноси
              вес тела на руки, чтобы не перенапрягать кисти.</li>
          </ul>
        </div>
        <div class="learn__position">
          <img class="learn__img" src="${position}" alt="print-position" >
        </div>
      </div>

      <div class="learn__section">
        <div class="learn__name">Исходная позиция</div>
        <div class="learn__content">
          <div class="learn__keys">
            <img class="learn__img" src="${main_keys}" alt="main-keys" >
          </div>
          <div class="learn__text">
            <p>Немного согни пальцы и положи их на клавиши ФЫВА и ОЛДЖ, которые находятся в среднем ряду. Эта строка называется ОСНОВНОЙ СТРОКОЙ, потому что ты всегда будешь начинать с этих клавиш и возвращаться к ним.</p>
            <p>На клавишах А и О, под указательными пальцами, находятся небольшие выступы. Они позволяют ориентироваться на клавиатуре вслепую.</p>
          </div>
        </div>
      </div>

      <div class="learn__section">
        <div class="learn__name">Схема клавиатуры</div>
        <div class="learn__content">
          <div class="learn__keyboard">
            <img class="learn__img" src="${keyboard}" alt="keyboard" >
          </div>
          <div class="learn__text">
            <p>Цвет клавиш на этой клавиатуре поможет тебе понять и запомнить, каким пальцем на какую клавишу нужно нажимать.</p>
          </div>
          <ul class="learn__list">
            <li class="learn__item">Нажимай клавиши только тем пальцем, который для них предназначен.</li>
            <li class="learn__item">Всегда возвращай пальцы в исходную позицию «ФЫВА – ОЛДЖ».</li>
            <li class="learn__item">Когда набираешь текст, представляй расположение клавиш.</li>
            <li class="learn__item">Установи ритм и соблюдай его, пока печатаешь. Нажимай на клавиши с одинаковым интервалом.</li>
            <li class="learn__item">Клавишу SHIFT всегда нажимает мизинец с противоположной стороны от нужной буквы.</li>
            <li class="learn__item">Пробел отбивай большим пальцем левой или правой руки, как тебе удобнее.</li>
          </ul>
          <div class="learn__text">
            <p>Сначала такой метод печати может показаться неудобным. Но не останавливайся. Со временем все будет получаться быстро, легко и удобно. Чтобы добиться максимального результата, выбирай курс слепой печати для твоей раскладки клавиатуры и на нужном языке.</p>
          </div>
        </div>
      </div>

      <div class="learn__section">
        <div class="learn__name">Движение пальцев</div>
        <div class="learn__content">
          <div class="learn__text">
            <p>Не подглядывай на клавиатуру во время печати. Просто скользи пальцами по клавишам, пока не найдешь основную строку.</p>
            <p>Ограничь движение кистей и пальцев до минимума, только чтобы нажимать нужные клавиши. Держи руки и пальцы как можно ближе к исходной позиции. Это увеличит скорость набора текста и снизит нагрузку на кисти.</p>
            <p>Следи за безымянными пальцами и мизинцами, так как они часто остаются незадействованными.</p>
          </div>
        </div>
      </div>

      <div class="learn__section">
        <div class="learn__name">Скорость печати</div>
        <div class="learn__content">
          <ul class="learn__list">
            <li class="learn__item">Не пытайся сразу печатать со скоростью света. Начинай ускоряться, только когда все 10 пальцев привыкнут нажимать правильные клавиши.</li>
            <li class="learn__item">Не торопись когда печатаешь, чтобы избежать ошибок. Скорость будет возрастать постепенно.</li>
            <li class="learn__item">Всегда просматривай текст на одно-два слова вперед.</li>
            <li class="learn__item">Пройди все уроки на клавиатурном тренажере Ratatype. И твоя скорость станет выше средней скорости печати.</li>
          </ul>
        </div>
      </div>

      <div class="learn__section">
        <div class="learn__name">Береги себя</div>
        <div class="learn__content">
          <div class="learn__text">
            <p>Сделай паузу, если чувствуешь, что сбиваешься и делаешь много ошибок. Небольшой перерыв вернет силы и внимательность.</p>
          </div>
        </div>
      </div>
    </div>
    <a class="button-primary" href="#">пора потренироваться</a>
  </div>
</div>
`
}
