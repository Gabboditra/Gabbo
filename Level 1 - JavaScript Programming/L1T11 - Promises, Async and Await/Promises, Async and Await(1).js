// declare fetchPokemonData and send request to fetch the data from the pokéAPI
const fetchPokemonData = fetch("https://pokeapi.co/api/v2/pokemon/absol")
  .then((res) => res.json()) // if the promise is successful, convert response to JSON
  .then((data) => {
    // the API has returned a response, so will get some properties from the data object
    // extract name and weight from the response
    const name = data.name;
    const weight = data.weight;
    // extract and map set of abilities from the response
    const abilities = data.abilities.map((ability) => {
      // return name, weight and set of abilities
      return {
        name: ability.ability.name,
        url: ability.ability.url,
        is_hidden: ability.is_hidden,
        slot: ability.slot,
      };
    });
    // logs the name, weight and set of abilities of the Pokémon to the console
    console.log(`Name:`);
    console.log(name);
    console.log(`\nWeight:`);
    console.log(weight);
    console.log(`\nAbilities:`);
    console.log(abilities);
  })
  // handle and display the error to the console
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
