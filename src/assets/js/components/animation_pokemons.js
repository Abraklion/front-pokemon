/* ======================================
*
*  АНИМАЦИЯ ПОКМОНОВ В БЛОКЕ INFO и OFFER
*
* ===================================== */

function getRandomInRange(min, max, parent) {

  let number = Math.floor(Math.random() * (max - min + 1)) + min;

  if(number !== parent){

    return number;

  }else {

    return getRandomInRange(min, max, parent);

  }

}

if(window.innerWidth >= 992){

  try {

    const flag = document.querySelector("[data-animations]");

    if(flag !== null){

      // изначальный покемон
      let pokemonId = !isNaN(+flag.dataset.animations) && +flag.dataset.animations < 4 ? flag.dataset.animations : 0;

      const arrPokemon = [
        ["info__inner--charizard","offer__inner--charizard"],
        ["info__inner--incineroar","offer__inner--incineroar"],
        ["info__inner--mewtwo","offer__inner--mewtwo"],
        ["info__inner--ivysaur","offer__inner--ivysaur"]
      ];

      const infoPokemon = document.querySelector(".js-info__inner");

      setInterval(function (){

        // придыдущий покемон
        let previousID = pokemonId;

        // новый выбраный покемон
        pokemonId =  getRandomInRange(0, 3, pokemonId);

        flag.classList.add("offer__inner--hidden");

        if(infoPokemon !== null){

          infoPokemon.classList.add("info__inner--hidden");

        }

        setTimeout(function () {

          flag.classList.remove(arrPokemon[previousID][1]);

          flag.classList.add(arrPokemon[pokemonId][1]);
          flag.classList.remove("offer__inner--hidden");

          if(infoPokemon !== null){

            infoPokemon.classList.remove(arrPokemon[previousID][0]);

            infoPokemon.classList.add(arrPokemon[pokemonId][0]);
            infoPokemon.classList.remove("info__inner--hidden");

          }

        },800);

      },10000);

    }

  }
  catch(err){
    console.info("Animation pokemons: " + err.message);
  }

}


