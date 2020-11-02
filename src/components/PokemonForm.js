import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  }

  handleChange = e => {
    const {name, value} = e.target
    //console.log(e.target.value)
    // this.setState({
    //   [e.target.name]: e.target.value
    // })
    console.log(this.state)
    this.setState({
      [name]: value
    })

  }

  handleSubmit = e => {
    //when click submit, add the data we've put in to our database
    e.preventDefault()
    let requestPackage = {
      headers: {'Content-Type':'application/json'},
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        hp: this.state.hp,
        sprites: {
          front: this.state.frontUrl, 
          back: this.state.backUrl
        }
      })
    }
    fetch("http://localhost:3000/pokemon", requestPackage)
    .then(rsp => rsp.json())
    .then(newPokemon => this.props.buttbutt(newPokemon))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange={this.handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange={this.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange={this.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
