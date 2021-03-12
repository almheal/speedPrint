import platinumMedal from '../../assets/img/platinum-medal.png'
import goldMedal from '../../assets/img/gold-medal.png'
import silverMedal from '../../assets/img/silver-medal.png'
import certificateHand from '../../assets/img/certification-hand.png'

const rewards = [
  {
    img: platinumMedal,
    name: 'platinum',
    speed: 350,
    accuracy: 99.5
  },
  {
    img: goldMedal,
    name: 'gold',
    speed: 250,
    accuracy: 98.7
  },
  {
    img: silverMedal,
    name: 'silver',
    speed: 200,
    accuracy: 96
  }
]

const rewardsColumn = [
  {
    title: 'Зачем проходить тест скорости печати?',
    text: ['Чтобы узнать свою скорость и точность печати, понять нужно ли что-то улучшить. Средняя скорость печати составляет 200 зн./мин, попробуй ее превзойти! Ты можешь пройти тест несколько раз и увидеть, как твоя скорость печати улучшается со временем.',
    'После прохождения теста онлайн ты получишь сертификат скорости печати, который сможешь прикрепить к резюме, показать учителю или похвастаться друзьям.']
  },
  {
    title: 'Как мы измеряем скорость печати?',
    text: ['Мы измеряем скорость печати в зн./мин  — сколько знаков в минуту без опечаток ты набрал. «Знаком» считается любой символ, включая пробелы. Мы учитываем только правильно набранные слова.',
  'Поэтому, если сделана опечатка, подсчет символов останавливается, пока ты ее не исправишь.']
  }
]

export function testTemplate() {
  const rewardsTemplate = rewards.map(item => createReward(item)).join('')
  const rewardsColums = rewardsColumn.map(item => createRewardColumn(item)).join('')

  return `
    <div class="container">
      <div class="test__inner">
        <div class="trainer__row">
          <div class="trainer__column">
            <img class="trainer__img" src="${certificateHand}" alt="man" >
          </div>
          <div class="trainer__column">
            <h1 class="trainer__title">Бесплатный тест скорости печати</h1>
            <div class="trainer__text">
              <p>Набери небольшой текст. Проверь, сколько знаков в минуту ты печатаешь на русском, украинском или английском языке, и порази друзей или работодателей сертификатом скорости печати.</p>
            </div>
            <a class="button-primary" href="#test-typing">пройти тест печати</a>
          </div>
        </div>
      </div>
    </div>
    <div class="rewards">
      <div class="container">
      <div class="test__rewards">
      <div class="rewards__body">
        <div class="rewards__row">
          <div class="reward__column">
            <div class="rewards__content">
              <ul class="rewards__naming">
                <li class="rewards__title">сертификат</li>
                <li class="rewards__title">скорость</li>
                <li class="rewards__title">точность</li>
              </ul>
              ${rewardsTemplate}
            </div>
          </div>
          <div class="reward__column">
            <div class="reward__text">
              <p>Проходи тестирование сколько хочешь раз и на любой раскладке. В зачет пойдет только лучший результат. Так что не бойся пробовать снова!</p>
              <p>А еще проверь свой рейтинг в таблице лучших результатов после прохождения теста скорости печати и попробуй стать победителем.</p>
            </div>
            <a class="learn-link line-hover" href="#test-typing">Пройти тест печати</a>
          </div>
        </div>
      </div>
        <div class="rewards__info">
          ${rewardsColums}
        </div>
        <div class="rewards-bottom">
          <h4 class="info__title">Тест займет всего 2-3 минуты!</h4>
          <div class="reward__text">
            <p>Проходи тест, сколько хочешь. Ограничений нет.
            Хватай клавиатуру и измеряй свою скорость печати!</p>
          </div>
          <a class="button-primary" href="#test-typing">пройти тест печати</a>
        </div>
    </div>
      </div>
    </div>
  `
}

function createReward(item) {
  return `
  <ul class="rewards__list">
    <li class="reward__medal">
      <img class="reward__medal-img" src="${item.img}" alt="reward-medal"/>
      <span>${item.name}</span>
    </li>
    <li class="reward__speed">
      <span>${item.speed}</span> зн./мин
    </li>
    <li class="reward__accuracy">
      <span>${item.accuracy}</span> %
    </li>
  </ul>
  `
}

function createRewardColumn(item){
  const text = item.text.map(i => `<p>${i}</p>`).join('')
  return `
  <div class="reward__column">
  <h4 class="info__title">${item.title}</h4>
  <div class="reward__text">
    ${text}
  </div>
</div>
  `
}
