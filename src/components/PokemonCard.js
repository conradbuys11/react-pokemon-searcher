import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  //props: this.props.pokemon, this.props.key

  state = {
    isFront: true
  }

  handleClick = () => {
    // console.log('nice')
    // click on card -> image of pokemon should face opposite direction
    // if img src = this.props.pokemon.sprites.front then it should show the back of the image

    //this.setState(isFront ? {isFront: false} : {isFront: true})
    this.setState({isFront: !this.state.isFront})
  }

  render() {
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={this.state.isFront ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
