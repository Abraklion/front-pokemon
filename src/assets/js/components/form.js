/* ===============
*
*  ВАЛИДАЦИЯ ФОРМ
*
* ============= */

try {

  /* ============ Переменные ============= */

  // отбираем все формы со страницы
  const listForms = document.querySelectorAll(".js-form");


  /* ============ Функции =============*/

  // валидирует на проверку длину строки | проверка спецсимволов | проверка на правильный емаил | совпадений паролей
  function validation(element, title, min = 3, max = 20,array = null) {

    // пустая переменная
    let error = '';

    /* 1 Проверка на длину строки : проверяем есть ли у элемента атрибут data-length */
    if (element.dataset.length){

      // проверка на минимальное количество символов
      if (element.value.trim().length < min){
        error += `${title} меньше ${min} символов. `;
      }

      // проверка на максимальное количество символов
      if (element.value.trim().length > max){
        error += `${title} больше ${max} символов. `;
      }

    }

    /* 2 Проверка спецсимволов : проверяем есть ли у элемента атрибут data-symbol */
    if (element.dataset.symbol){

      // только буквы и нижние подчеркивания без пробелов
      let re = /[^A-Za-zа-яА-ЯёЁ_]/ig;

      // если search возвращает не -1 , значит есть запрещенный символ
      if (element.value.search(re) !== -1){

        error += `${title} содержит запрещенные символы. `;

      }

    }

    /* 3 Проверка на правильный емаил : проверяем есть ли у элемента атрибут data-email */
    if (element.dataset.email){

      // если значения не содержит символа @
      if (!element.value.includes("@")){

        error += `${title} должена содержать символ @. `;

      }

    }

    /* 4 Совпадений паролей : проверяем есть ли у элемента атрибут data-comparisons */
    if (element.dataset.comparisons){

      // если массив для сравнения не передали в функцию
      if(array === null){

        console.info(new Error('Передайте массив для сравнения паролей'));

      }
      // иначи
      else {

        // проверяем есть ли в переданном массиве елемент с атрибутом data-parent, если есть возвращаем в переменую newPasswordOne
        let newPasswordOne = Array.from(array).find(function (element){
          if (element.dataset.parent)
            return true;
        });

        // если newPasswordOne неопределено
        if(newPasswordOne === undefined){

          console.info(new Error('В массиве нет совпадений'));

        }
        // иначи
        else {

          // спавниваем элемент с атрибутом data-comparisons с элементом с атрибутом data-parent
          if (element.value !== newPasswordOne.value){

            error += `${title} не совпадает. `;

          }

        }

      }

    }

    // если в переменной что то есть
    if(error){

      // создаем элемент
      let createElement = document.createElement("span");

      // добавляем класс
      createElement.classList.add("form__error");

      // ложим в элемент текст ошибки
      createElement.innerText = error;

      // находим родителя с классом form__element и с конец добавляем узел span
      element.closest(".form__element").appendChild(createElement);

    }

    // возврящаем переменную error
    return error;

  }

  // валидирует на проверку радиокнопок и чекбоксов на активное состояния
  function validationRadioAndCheckbox(element,title){

    // поздаем пустую переменную
    let error = '';

    // если это группа элементов
    if(element.length){

      // если в свойстве value у группы не чего нет
      if(!element.value){

        error += `${title}. `;

      }

    }
    // иначе если свойства length у элемента не существует , значит 1 элемент
    else {

      // если элемент не отмечен
      if(!element.checked){

        error += `${title}. `;

      }

    }

    // если в переменной что то есть
    if(error){

      // создаем элемент
      let createElement = document.createElement("span");

      // добавляем класс
      createElement.classList.add("form__error");

      // ложим в элемент текст ошибки
      createElement.innerText = error;

      // если это группа элементов
      if(element.length){

        element[0].closest(".form__element").appendChild(createElement);

      }
      // если это один элемент
      else {

        element.closest(".form__element").appendChild(createElement);

      }

    }

    // возврящаем переменную error
    return error;

  }

  /* ============ События =============*/

  // проходимся по всем формам
  listForms.forEach(element => {

    // вешаем события submit на каждую форму
    element.addEventListener("submit", function (evt){

      // evt.preventDefault();

      // вытаскиваем имя формы из атрибута data-name в переменную
      let formName = element.dataset.name;

      // создаем пустую переменную
      let result = '';

      // выбираем все элементы с классом form__error проходимся по нимм в цикле и удаляем
      element.querySelectorAll(".form__error").forEach(element => {
        element.remove();
      });

      // определяем переключатель
      switch(formName) {

        // если в formName равна значению enter
        case "enter":

          let enterName = element.elements.namedItem("name");
          let enterPassword = element.elements.namedItem("password");

          result += validation(enterName,"Логин",3,20);

          result += validation(enterPassword,"Пароль",3,20);

          // если в переменной что то есть отменяем отправку формы
          if (result){

            evt.preventDefault();

          }

          break;

        // если в formName равна значению registration
        case "registration":

          let registrationName = element.elements.namedItem("name");
          let registrationFloor = element.elements.namedItem("floor");
          let registrationPassword = element.elements.namedItem("password");
          let registrationRepeatPassword = element.elements.namedItem("repeat-password");
          let registrationEmail = element.elements.namedItem("email");
          let registrationRegulations = element.elements.namedItem("regulations");

          result += validation(registrationName,"Имя тренера",3,20);

          result += validationRadioAndCheckbox(registrationFloor,"Выберите пол тренера");

          result += validation(registrationPassword,"Пароль",3,20);

          result += validation(registrationRepeatPassword,"Пароль",3,20, element.elements);

          result += validation(registrationEmail,"Электронная почта",3,30);

          result += validationRadioAndCheckbox(registrationRegulations,"Примите пользовательские соглашения");

          // если в переменной что то есть отменяем отправку формы
          if (result){

            evt.preventDefault();

          }

          break;

        // если в formName равна значению recovery
        case "recovery":

          let recoveryEmail = element.elements.namedItem("email");

          result += validation(recoveryEmail,"Электронная почта",3,30);

          // если в переменной что то есть отменяем отправку формы
          if (result){

            evt.preventDefault();

          }

          break;

        // если в formName равна значению newPassword
        case "newPassword":

          let newPasswordOne = element.elements.namedItem("password");
          let newPasswordTwo = element.elements.namedItem("repeat-password");

          result += validation(newPasswordOne,"Пароль",3,20);

          result += validation(newPasswordTwo,"Пароль",3,20, element.elements);

          // если в переменной что то есть отменяем отправку формы
          if (result){

            evt.preventDefault();

          }

          break;

        // если в formName не равна не чему
        default:
          console.log("Не существует валидации под эту форму");
      }


    });

  });

}
catch(err){
  console.info("Form: " + err.message);
}
