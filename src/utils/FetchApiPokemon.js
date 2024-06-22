export default fetchApiPokemon = async (temporadas) => {
  
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${temporadas[1]}&offset=${temporadas[0]}`
  try {
    const response = await fetch(url)

    const data = await response.json()
    const pokemonUrl = data.results

    const promises = pokemonUrl.map(async (item) => {
      try {
        const result = await fetch(item.url)
        const dataPokemon = await result.json()

        const { height, id, name, sprites, types, weight } = dataPokemon
        const { back_default, back_shiny, front_default, front_shiny } = sprites

        const pokemon = {
          height,
          id,
          name,
          back_default,
          back_shiny,
          front_default,
          front_shiny,
          types,
          weight,
        }

        return pokemon

      } catch (error) {
        console.log("Ocurrio un error: ", error);
      }
    });

    const resolvedPokemons = await Promise.all(promises);
    return resolvedPokemons

  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
}