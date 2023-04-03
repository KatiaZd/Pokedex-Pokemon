import React from "react";
import { Pokemon } from "../../interfaces";

interface Props {
    pokemons: Pokemon[];
}


const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons} = props

    return (
        <section className="collectionContainer">
            {pokemons.map((pokemons) => {
                return <div>
                    {pokemons.name}
                </div>
            })}
        </section>
            
    )
}

export default PokemonCollection;
