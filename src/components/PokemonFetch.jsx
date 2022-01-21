import React, {useState} from "react";

const PokemonFetch = () => {

    //create state var to store array of pokemon

    let [pokedex, setpokedex] = useState([]);

    

    const GetPokemon = () => {
        console.log("you clicked the button")

        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //.then is what happens when we get the response back
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log("after json formatting",response)
        // 
        setpokedex(response.results)
        console.log(pokedex)
    })
    //.catch is what will happen if we get an error
    .catch(err => {
        console.log("we got an error", err)
    })
    
    // this will show up before fetch because we dont know when fetch will return our response
    // shows that we can run other code while waiting for the response
    console.log("after fetch, will this run before or after?")
    }



    return (
        <div>
            <h3>Got Pokemon?</h3>
            <button onClick={GetPokemon}>Fetch Pokemon</button>
            {pokedex.map((pokeObj, i) => {
                return (
                    <div>
                        <h3>{pokeObj.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

// make sure to export component
export default PokemonFetch;