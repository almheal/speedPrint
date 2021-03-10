export function tutorResultTemplate() {
  return `
    <div class="container">
      <div class="result__inner">
        <div class="result__body">
          <div class="result__row">
            <div class="result__column">
              <div class="result__content">
                <div class="result__value">
                  <span data-speed>0</span><br/> знаков в минуту
                </div>
                <div class="result__text">
                  <p>Ты печатаешь быстрее, чем 80% пользователей, а можно еще лучше! Уроки от Ratatype помогут тебе улучшить скорость печати.</p>
                </div>
                <a class="button-primary" href="#typing-tutor">Пройти заново</a>
              </div>
            </div>

            <div class="result__column">
              <div class="result__img-wrapper">
                <img class="result__img" src="../src/assets/img/tutor-man.png" alt="result-man"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `
}
