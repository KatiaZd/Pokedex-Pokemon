import React from "react";
import { Pokemon } from "../../interfaces";
import PokemonList from "../PokemonList/PokemonList";   
import './PokemonCollection.css'


interface Props {
    pokemons: Pokemon[];
}

const PokemonCollection: React.FC<Props> = (props) => {
    const {pokemons} = props
    // console.log(pokemonList)

    return(
        <>
            <section className="PokemonCollection__container">
                {pokemons.map((pokemon) => {
                return (
                    <PokemonList 
                        key={pokemon.id} 
                        name={pokemon.name} 
                        id={pokemon.id} 
                        image={pokemon.sprites.front_default}
                        type={pokemon.types[0].type.name}  
                    />
                )
            })}
            </section>
        </>
    )  
}


export default PokemonCollection;
