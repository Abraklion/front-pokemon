/* =======================================================
*
*  ОТВЕЧАЕТ ЗА ОТВЕТЫ ОТ СЕРВЕРА НА ЗАПРОСЫ ПОЛЬЗОВАТЕЛЯ
*
* ====================================================== */

try {

  /* ============ Переменные =============*/

  const answer = document.querySelectorAll(".success, .error, .inform");

  /* ============ События =============*/

  // проходимся по всем ответам в цикле
  answer.forEach(function (element) {

    // каждому ответу назначаем события клик
    element.addEventListener("click", function (evt) {

      // отменяем событие по умолчанию
      evt.preventDefault();

      // даем клас hide
      this.classList.add("hide");

      // удаляем ответ через 300 милисекунд
      setTimeout(() => this.remove(),300);

    })
  });
}
catch(err){
  console.info("Answer: " + err.message);
}
