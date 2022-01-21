/* ================================================================================ */
/* =========================== ПРОКРУТИТЬ ВВЕРХ =================================== */
/* ================================================================================ */


if(document.querySelector(".js-up") !== null){

  /* ============ Переменные =============*/

  const scrollToHandler = document.querySelector(".js-up");
  const scrollToHandlerBtn = scrollToHandler.querySelector(".up__button");
  const scrollNews = document.querySelector(".js-news");

  /* ============ Переменные =============*/


  /* ============ События =============*/

  window.addEventListener("scroll", function (){

    const box = scrollNews.getBoundingClientRect().top + pageYOffset;

    if(pageYOffset >= box){

      if(!scrollToHandler.classList.contains("up--active")){
        scrollToHandler.classList.add("up--active");
        scrollToHandler.classList.add("up--show");
      }
    }else{

      if(scrollToHandler.classList.contains("up--active")){
        scrollToHandler.classList.remove("up--show");

        setTimeout(function (){
          scrollToHandler.classList.remove("up--active");
        },400);
      }
    }
  });

  scrollToHandlerBtn.addEventListener("click",function (){

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

  /* ============ События =============*/

}
