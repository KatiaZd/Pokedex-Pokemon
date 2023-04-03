import React from "react";
import { Pokemon } from "../../interfaces";


interface Props {
    pokemonList: Pokemon[];
}


const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemonList} = props
    // console.log(pokemonList)

    return <section className="collectionContainer">
        
            {pokemonList.map((pokemon) => {
                return (
                    <div key={pokemon.id}>
                        {pokemon.name}
                    </div>
                )

            })}

        </section>
            
    
}

export default PokemonCollection;
