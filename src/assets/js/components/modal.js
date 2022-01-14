try {

  /* ============ Переменные =============*/

  const closeModal = document.querySelectorAll(".js-close");
  const regTrainer = document.querySelectorAll(".js-reg");
  const enterButton = document.querySelectorAll(".js-enterBtn");
  const recoveryButton = document.querySelectorAll(".js-rec");

  /* ============ События =============*/

  // Мыши

  // показать модальное окно регистрации
  regTrainer.forEach(function (element){

    // если произошел клик
    element.addEventListener("click",function (evt) {

      // отменяем событие по умолчанию
      evt.preventDefault();

      // проверяем существует ли у него класс "modal--active"
      if(document.querySelector(".js-enter").classList.contains("modal--active")){

        // если существует удаляем
        document.querySelector(".js-enter").classList.remove("modal--active");
      }

      // показываем модальное окно регистрации
      document.querySelector(".js-registration").classList.add("modal--active");

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.add("page__body--overflow");

    });
  });

  // показать модальное окно входа
  enterButton.forEach(function (element){

    // если произошел клик
    element.addEventListener("click",function (evt) {

      // отменяем событие по умолчанию
      evt.preventDefault();

      // проверяем существует ли у него класс "header__burger--close"
      if(document.querySelector(".js-burger").classList.contains("header__burger--close")){

        // если существует удаляем
        document.querySelector(".js-burger").classList.remove("header__burger--close");
        document.querySelector(".js-menu").classList.remove("header__menu--active");
      }

      // показываем модальное окно регистрации
      document.querySelector(".js-enter").classList.add("modal--active");

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.add("page__body--overflow");

    });
  });

  // показать модальное окно восстоновления пароля
  recoveryButton.forEach(function (element){

    // если произошел клик
    element.addEventListener("click",function (evt) {

      // отменяем событие по умолчанию
      evt.preventDefault();

      // проверяем существует ли у него класс "modal--active"
      if(document.querySelector(".js-enter").classList.contains("modal--active")){

        // если существует удаляем
        document.querySelector(".js-enter").classList.remove("modal--active");
      }

      // показываем модальное окно регистрации
      document.querySelector(".js-recovery").classList.add("modal--active");

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.add("page__body--overflow");

    });
  });

  // скрыть модальное окно регистрации | входа | востоновления пароля
  closeModal.forEach(function (element){

    // если произошел клик
    element.addEventListener("click",function (evt) {

      // отменяем событие по умолчанию
      evt.preventDefault();

      // находим родителя
      const parent = this.closest(".modal");

      // проверяем существует ли у него класс "modal--active"
      if(parent.classList.contains("modal--active")){

        // если существует удаляем
        parent.classList.remove("modal--active");
      }

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.remove("page__body--overflow");

    });
  });

}
catch(err){
  console.info("Modal: " + err.message);
}


