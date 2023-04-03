import React from "react";


 
interface Props {
    id: number;
    name: string;
    image: string;
    type: string;
}

function PokemonList(props : Props) {
    const { id,name, image, type} = props
    console.log(PokemonList)

    return (
        <div>
            <section className="container_PokemonList">
                <p> {id} </p>
                <p> {name} </p>
                <img src={image} alt="" />
                <p> Type : {type} </p>
            </section>
        </div>
    )
}

export default PokemonList