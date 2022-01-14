try {

  /* ============ Переменные =============*/

  const burger = document.querySelector(".js-burger");

  /* ============ События =============*/

  // Мыши
  burger.addEventListener("click",function (evt) {

    evt.preventDefault();

      this.classList.toggle("header__burger--close");

      this.nextElementSibling.classList.toggle("header__menu--active");

      document.querySelector(".page__body").classList.toggle("page__body--overflow");

  });

}
catch(err){
  console.info("Burger: " + err.message);
}
