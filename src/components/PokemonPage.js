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

  buttFunction = () => {

  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemon={this.state.pokemon} buttFunction={() => this.buttFunction()}/>
      </Container>
    )
  }
}

export default PokemonPage
