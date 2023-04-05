import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import PokemonCollection from './components/PokemonCollection/PokemonCollection'
import { Pokemon } from './interfaces'

interface Pokemons {
  name: string
  url: string
}

const App: React.FC = () => {
  // Stocker la liste de pokemon que j'ai trié dans un tableau
  // J'utilise le hook useState pour stocker le tableau :
  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  // Charger Pokémons suivants
  const [nextUrl, setNextUrl] = useState<string>("")

  // Je vais chercher la liste de pokemon dans l'API
  // Je vais utiliser le hook useEffect pour faire ça, au chargement de la page, elle va faire une requête à l'API et stocker la réponse dans le tableau pokemonList
  useEffect(() => {
    const getPokemon = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20') // Stocker la réponse de l'API dans une variable
      // Axios : sert à faire des requêtes HTTP, installer via npm install axios
      // console.log(response.data.results) // Afficher la réponse de l'API dans la console

      setNextUrl(response.data.next)


     
      response.data.results.forEach(async (pokemon: Pokemons) => { // Pour chaque pokemon dans la liste de pokemon de l'API
        const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`) // Je vais chercher les noms du pokemon dans l'API, j'utilise un template suivi de ${name}
        
        // console.log(pokemonResponse.data) // Afficher la réponse de l'API dans la console
    
      setPokemons((p) => [...p, pokemonResponse.data]) // Je stocke la réponse de l'API dans le tableau pokemonList

      })
    }
  
    getPokemon()
  }, [])
  // Tableau vide pour dire que je veux que ça se fasse au chargement de la page, une fois

  // console.log(nextUrl)
  const nextPage = async () => {
    const response = await axios.get(nextUrl)

    setNextUrl(response.data.next)  // Stocker la réponse de l'API dans une variable, next = Element de l'API qui permet de passer à la page suivante

    response.data.results.forEach(async (pokemon: Pokemons) => { 
      const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
    setPokemons((p) => [...p, pokemonResponse.data]) 
    })

  }

  return(
    <div className='app'>
      <h1>Pokemon</h1>
      <PokemonCollection pokemons={pokemons} />
      <button onClick={nextPage}>Voir + de Pokémons</button>
  </div>
  );
}

export default App


