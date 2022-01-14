try {

  /* ============ Переменные =============*/

  const answer = document.querySelectorAll(".success, .error, .inform");

  /* ============ События =============*/

  answer.forEach(function (element) {

    element.addEventListener("click", function (evt) {

      // отменяем событие по умолчанию
      evt.preventDefault();

      this.classList.add("answer--hide");

      setTimeout(() => this.remove(),300);

    })
  });
}
catch(err){
  console.info("Answer: " + err.message);
}
