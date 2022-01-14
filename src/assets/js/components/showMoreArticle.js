try {

// Сколько показывать элементов При загрузки страницы
  const numToShowDefault = 5;

// Сколько показывать элементов При нажатии по кнопке "Показать еще"
  const numToShow = 5;

// Отбираем в набор все элементы которые будут показывать по клику по кнопки "Показать еще"
  let listPortfolio = Array.from(document.querySelectorAll(".js-news__item"));

// Считаем количество элементов
  let numInList = listPortfolio.length;

// Отбираем кнопку показать еще
  let buttonMore = document.querySelector(".js-news__button");

// Если общиее количество элементов больше чем сколько нужно показывать по умолчанию.
  if (numInList > numToShowDefault) {

    // показываем блок показать еще
    buttonMore.classList.add("news__button--show");

  }

// показываем первые N элементов
  listPortfolio.slice(0, numToShowDefault).forEach(function (element) {
    element.classList.add("news__item--show");

    setTimeout(function () {
      element.classList.add("news__item--effect");
    }, 300);
  });

  /* при нажатии на кнопку показать еще */
  buttonMore.addEventListener("click", function (evt) {

    // отменяем действия по умолчанию
    evt.preventDefault();

    // находим все элементы которые видимые
    let showing = document.querySelectorAll(".news__item--show").length;

    // с какого элемента и по какой элемент ( не включительно ) показать
    listPortfolio.slice(showing, showing + numToShow).forEach(function (element) {

      element.classList.add("news__item--show");

      setTimeout(function () {
        element.classList.add("news__item--effect");
      }, 300);

    });

    // снова находим все элементы которые видимые
    let nowShowing = document.querySelectorAll(".news__item--show").length;

    // если видимых элементов больше или равно всему количеству элементов.
    if (nowShowing >= numInList) {

      // скрываем блок показать еще
      buttonMore.classList.remove("news__button--show");
    }
  });

}catch(err){
  console.info("ShowMoreArticle: " + err.message);
}
