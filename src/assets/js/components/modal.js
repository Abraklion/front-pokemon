/* ==============
*
*  МОДАЛЬНЫЕ ОКНА
*
* ============= */

try {

  /* ============ Переменные =============*/

  // узлы отвечающие за закрытия модальных окон
  const closeModal = document.querySelectorAll(".js-close");

  // узлы отвечающие за открытия окна регистрации
  const regTrainer = document.querySelectorAll(".js-reg");

  // узлы отвечающие за открытия окна входа
  const enterButton = document.querySelectorAll(".js-enterBtn");

  // узлы отвечающие за открытия восстоновить пароль
  const recoveryButton = document.querySelectorAll(".js-rec");

  // переменная которая будет сохранять элемент который вызвал модальное окно
  let lastFocus;

  // переменная в которая отвечает на вопрос "открыто ли модальное окно"
  let modalOpen = false;

  // переменная в которой хранится открытое модальное окно
  let modalActive;


  /* ============ Функции =============*/

  // Функция 1: сохраняет элемент который вызвал модальное окно в переменую lastFocus
  function modalShow (modal) {

    // в переменую lastFocus покадет элемент который вызвал модальное окно
    lastFocus = document.activeElement;

    // делаем модальное окно интерактивным с помощью атрибута tabindex
    modal.querySelector(".modal__inner").setAttribute('tabindex', '0');

    // через 200 милисекунд даем модальному окну фокус
    setTimeout(()=>{

      modal.querySelector(".modal__inner").focus();

    },200)
  }

  // Функция 2: Возвращает сохраненому в переменой lastFocus элементу фокус после закрытия модального окна
  function modalClose () {

    // возвращаем фокус
    lastFocus.focus();

  }

  // Функция 3: Зацикливаем интерактивные элемента активного модального окна
  function focusRestrict ( event ) {

    // отлавливаем события фокус на перехват
    document.addEventListener('focus', function( event ) {

      // если модальное окно открыто и элемент который вызвал фокус не из активного модального окна
      if ( modalOpen && !modalActive.contains( event.target ) ) {

        // отменяем распростронения события
        event.stopPropagation();

        // ставим фокус в начало активного модельного окна
        modalActive.querySelector(".modal__inner").focus();

      }
    }, true);
  }


  /* ============ При загрузке страницы =============*/

  // проверяем есть ли класс modal--active в документе, если есть то есть активное модальное окно
  if(document.querySelector(".modal--active")){

    // кладем активное модальное окно в переменую modalActive
    modalActive = document.querySelector(".modal--active");

    // щелкаем переключатель в значения истина
    modalOpen = true;

    // фызываем функцию
    modalShow(modalActive);
  }

  // фызываем функцию
  focusRestrict();


  /* ============ События =============*/


  // - Мыши - //

  // События 1: Показать модальное окно регистрации
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

      // отбираем в набор модальное окно регистрации
      modalActive = document.querySelector(".js-registration");

      // показываем модальное окно регистрации
      modalActive.classList.add("modal--active");

      // вызываем функцию modalShow и передаем ей модальное окно;
      modalShow(modalActive);

      modalOpen = true;

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.add("page__body--overflow");

    });
  });

  // События 2: Показать модальное окно входа
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

      // отбираем в набор модальное окно регистрации
      modalActive = document.querySelector(".js-enter");

      // показываем модальное окно регистрации
      modalActive.classList.add("modal--active");

      // вызываем функцию modalShow и передаем ей модальное окно;
      modalShow(modalActive);

      modalOpen = true;

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.add("page__body--overflow");

    });
  });

  // События 3: Показать модальное окно восстоновления пароля
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

      // отбираем в набор модальное окно регистрации
      modalActive = document.querySelector(".js-recovery");

      // показываем модальное окно регистрации
      modalActive.classList.add("modal--active");

      // вызываем функцию modalShow и передаем ей модальное окно;
      modalShow(modalActive);

      modalOpen = true;

      // скрываем контент который не помещается в body (в экран)
      document.querySelector(".page__body").classList.add("page__body--overflow");

    });
  });

  // События 4: Скрыть модальное окно регистрации | входа | востоновления пароля
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

      modalOpen = false;

      // вызываем функцию modalClose
      modalClose();

      // удаляем класс page__body--overflow
      document.querySelector(".page__body").classList.remove("page__body--overflow");

    });
  });

  // - Клавиатуры - //

  // слушаем события с клавиатуры
  window.addEventListener("keydown", function (evt){

    // если нажата клавиша Escape
    if(evt.key === "Escape" || evt.keyCode === 27) {

      // отбираем в набор все узлы с классо modal--active и проходимся по ним в цикле
      document.querySelectorAll(".modal--active").forEach((element)=>{

        // если есть класс modal--active
        if(element.classList.contains("modal--active")){

          // отменяем событие по умолчанию
          evt.preventDefault();

          // удаляем
          element.classList.remove("modal--active");

          modalOpen = false;

          // вызываем функцию modalClose
          modalClose();

          // удаляем класс page__body--overflow
          document.querySelector(".page__body").classList.remove("page__body--overflow");

        }

      });

    }

  });

}
catch(err){
  console.info("Modal: " + err.message);
}
