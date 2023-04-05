import './PokemonList.css'

interface Props {
    id: number;
    name: string;
    image: string;
    type: string;
}

function PokemonList(props : Props) {
    const { id,name, image, type} = props
    // console.log(PokemonList)

    return (
        <div>
            {/* Variables afin de styliser selon le type */}
            <section className= {`PokemonList__container ${type}`}> 
            
                <p className="PokemonList__Id"> # {id} </p>
                <p className="PokemonList__name"> {name} </p>
                <img className="PokemonList__img" src={image} alt="" />
                <p className="PokemonList__type"> Type : {type} </p>
            </section>
        </div>
    )
}

export default PokemonList