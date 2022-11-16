const offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemon(pokemon) {
  return `
  <li class="pokemon">
  <span class="number">#001</span>
  <span class="name">${pokemon.name}</span>
  
  <div class="detail">
    <ol class="types">
      <li class="type">grass</li>
      <li class="type">poison</li>
    </ol>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}"></img>
  </div>
</li> 
  `
}

const listPokemon = document.getElementById('pokemonList')

fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    for (let index = 0; index < pokemonList.length; index++) {
      const pokemon = pokemonList[index];
      listPokemon.innerHTML += convertPokemon(pokemon)

      
    }

  })
  .catch((error) => console.error(error))