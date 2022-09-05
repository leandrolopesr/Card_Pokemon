const pokemons = [
  {
    name: "bulbasaur",
    hp: "45",
    attach: "49",
    defence: "49",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    name: "Charmander",
    hp: "39",
    attach: "52",
    defence: "43",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    name: "Squitle",
    hp: "44",
    attach: "48",
    defence: "65",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
];

var current_pokemon = 0;
var img1 = document.getElementById("img1");
var name_poke = document.getElementById("img");
var hp_poke = document.getElementById("hp");
var atack_poke = document.getElementById("atack");
var defender_poke = document.getElementById("defender");

function getPokemon(pokedexId) {
  img1.src = pokemons[current_pokemon].image;
  name_poke.textContent = pokemons[current_pokemon].name;
  hp_poke.textContent = pokemons[current_pokemon].hp;
  atack_poke.textContent = pokemons[current_pokemon].attach;
  defender_poke.textContent = pokemons[current_pokemon].defence;
}
function proximo() {
  if (current_pokemon != 2) {
    current_pokemon++;
    getPokemon(current_pokemon);
  } else {
    alert("Você Passou do Limite de Pokemons");
  }
}

function anterior() {
  if (current_pokemon == 0) {
    alert("Esse é o seu primeiro pokemon");
  } else {
    current_pokemon--;
    getPokemon(current_pokemon);
  }
}
getPokemon(current_pokemon);
