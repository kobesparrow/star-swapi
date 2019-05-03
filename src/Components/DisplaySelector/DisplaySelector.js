import React, { Component } from 'react';

class DisplaySelector extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>Make a selection below: </div>
        <button value='People' onClick={ this.props.updateCardContainer }>People</button>
        <button value='Planets' onClick={ this.props.updateCardContainer }>Planets</button>
        <button value='Vehicles' onClick={ this.props.updateCardContainer }>Vehicles</button>
        <button value='Favorites' onClick={ this.props.updateCardContainer }>Favorites</button>
      </div>
    )
  }
}

export default DisplaySelector;