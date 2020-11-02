import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
  state = {
    pokemon: []
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon/')
    .then(rsp => rsp.json())
    .then(arr => this.setState({pokemon: arr}))
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  buttbutt = (newPokemon) => { 
    //we cannot use push because push will directly change the whole array but we cannot do that in react because we use setState to update the state
    //we use concat because it is nondestructable and will only theoritically change our state. it won't change the array
    let updatedPokemonArray = this.state.pokemon.concat(newPokemon)
    // array.concat(pokemon) // concat will add something to an array and return the value, but won't change the full array. 
    this.setState({
      pokemon: updatedPokemonArray
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br /> 
        <PokemonForm buttbutt={this.buttbutt}/> 
        <br />
        <Search />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} />
      </Container>
    )
  }
}

export default PokemonPage
