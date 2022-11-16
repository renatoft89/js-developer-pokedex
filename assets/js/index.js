function convertPokemonTypesToLi(pokemonTypes){
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}<li>`)
}

function convertPokemon(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">${pokemon.order}</span>
    <span class="name">${pokemon.name}</span>
  
    <div class="detail">
      <ol class="types">
        ${convertPokemonTypesToLi(pokemon.types).join(' ')}
      </ol>
      <img src=${pokemon.sprites.front_default} alt="${pokemon.name}"></img>
    </div>
  </li>`
}

const listPokemon = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemonList = []) => {
  listPokemon.innerHTML+= pokemonList.map((pokemon) => convertPokemon(pokemon)).join('')
})
