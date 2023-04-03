import axios from 'axios'
import './App.css'
import react, { useEffect, useState } from 'react'

interface Pokemons {
  name: string
  url: string
}

interface Pokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  types: [
    {
      type: {
        name: string
      }
    }
  ]
}

function App() {
  // Stocker la liste de pokemon que j'ai trié dans un tableau
  // J'utilise le hook useState pour stocker le tableau :

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

  // Je vais chercher la liste de pokemon dans l'API
  // Je vais utiliser le hook useEffect pour faire ça, au chargement de la page, elle va faire une requête à l'API et stocker la réponse dans le tableau pokemonList
  useEffect(() => {
    const getPokemonList = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20') // Stocker la réponse de l'API dans une variable
      
      console.log(response.data.results) // Afficher la réponse de l'API dans la console
     
      response.data.results.forEach(async(pokemonList: Pokemons) => { // Pour chaque pokemon dans la liste de pokemon de l'API
        const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonList.name}`) // Je vais chercher les noms du pokemon dans l'API, j'utilise un template suivi de ${name}
        console.log(pokemonResponse.data) // Afficher la réponse de l'API dans la console
    
      setPokemonList((p) => [...p, response.data]) // Je stocke la réponse de l'API dans le tableau pokemonList


      })
  }
  getPokemonList()
  }, [])
  // Tableau vide pour dire que je veux que ça se fasse au chargement de la page, une fois


  return(
    <div className='App'>
      <header className="pokemonHeader">Pokemon</header>
  </div>
  );
}

export default App
