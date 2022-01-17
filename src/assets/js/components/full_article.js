/* ============ Переменные =============*/

const full_article = document.querySelectorAll(".js-full_article");

/* ============ События =============*/

// проходимся в цикле по full_article
full_article.forEach(function (element) {

  // Вешаем события клика на каждый элемент
  element.addEventListener("click",function (e) {

    // отменяем действие по умолчанию у элемента
    e.preventDefault();

    // находим прородителя элемента
    let parent = this.parentNode.parentNode;
    // находим блок заголовка
    let article__title = parent.querySelector(".article__title");
    // находим блок описания
    let article__content = parent.querySelector(".article__content");

    // ширина окна (без учета полосы прокрутки)
    let viewportScreen  = document.documentElement.clientWidth;

    // если текст элемента по которомы произашел клик равен "подробнее"
    if(this.innerText === "подробнее"){

      // добывляем свойство overflow = "visible" если ширина экрана больше или равна 576
      if(viewportScreen >= 576){
        parent.classList.add("article--active");

        article__content.style.overflow = "visible";
      }

      article__title.style.height = article__title.scrollHeight + "px";
      article__content.style.height = article__content.scrollHeight + "px";

      this.innerText = "закрыть";
    }
    // если текст элемента по которомы произашел клик не равен "подробнее"
    else{

      // проверяем существует ли у него класс "article--active"
      if(parent.classList.contains("article--active")){

        parent.classList.remove("article--active");

      }

      article__title.removeAttribute("style");
      article__content.removeAttribute("style");

      this.innerText = "подробнее";
    }

  })
});
