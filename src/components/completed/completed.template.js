export function completedTemplate(){
  return `
  <div class="container">
    <div class="completed__inner">
      <div class="completed__body">
        <div class="completed__column">
          <div class="test__results">
            <div class="test__item">
              <div class="test__icon">
                <img
                  class="test__img"
                  src="../src/assets/img/speedometer.svg"
                  alt="speed"
                />
              </div>
              <div class="test__content">
                <div class="test__name">скорость</div>
                <div class="test__result"><span data-speed></span> зн./мин</div>
              </div>
            </div>
            <div class="test__item">
              <div class="test__icon">
                <img
                  class="test__img"
                  src="../src/assets/img/target.svg"
                  alt="accuracy"
                />
              </div>
              <div class="test__content">
                <div class="test__name">точность</div>
                <div class="test__result"><span data-accuracy></span> %</div>
              </div>
            </div>
          </div>
          <div class="certificate">
            <img
              class="certificate__img"
              src="../src/assets/img/certificate.jpg"
              alt="certificate"
            />
            <div class="certificate__body">
              <div class="certificate__content">
                <div class="certificate__level">базовый сертификат</div>
                <div class="reward__name">награждается</div>
                <div class="user__name">Твое прекрасное имя</div>
                <div class="certificate__text">
                  за печать на <span data-language>русском языке</span> со
                  скоростью <span data-speed>0</span> зн./мин с точностью
                  <span data-accuracy>0</span> %
                </div>
              </div>
            </div>
            <div class="certificate-bottom">
              <div class="certificate__date" data-certificate-date></div>
            </div>
          </div>
        </div>
        <div class="completed__column">
          <h3 class="completed__title">
            Первоклассный результат! Сертификат почти у тебя.
          </h3>
          <div class="completed__text">
            <p>
              Чтобы получить сертификат печати — просто зарегистрируйся. А
              еще ты откроешь доступ ко всем урокам, которые помогут тебе
              улучшить скорость печати.
            </p>
          </div>
          <a class="button-primary" href="#">получить мой сертификат</a>
        </div>
      </div>
    </div>
  </div>`
}