/* =====================================================
*
*  ОТКРЫТИЯ МЕНЮ ПО КЛИКУ НА БУРГЕР НА МОБИЛЬНЫХ ВЕРСИЯХ
*
* ==================================================== */

try {

  /* ============ Переменные =============*/

  const burger = document.querySelector(".js-burger");

  /* ============ События =============*/

  // Мыши
  burger.addEventListener("click",function (evt) {

    evt.preventDefault();

    this.classList.toggle("header__burger--close");

    this.nextElementSibling.classList.toggle("header__menu--active");

    let textBurger = this.firstElementChild.innerText;

    if(textBurger === "Открыть меню"){

      this.firstElementChild.innerText = "Закрыть меню"

    }else{

      this.firstElementChild.innerText = "Открыть меню"

    }

    document.querySelector(".page__body").classList.toggle("page__body--overflow");

  });

}
catch(err){
  console.info("Burger: " + err.message);
}
