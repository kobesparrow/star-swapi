import React from 'react';

const DisplaySelector = (props) => {

  return (
    <div>
      <div>Make a selection below: </div>
      <button value='People' onClick={ props.updateCardContainer }>People</button>
      <button value='Planets' onClick={ props.updateCardContainer }>Planets</button>
      <button value='Vehicles' onClick={ props.updateCardContainer }>Vehicles</button>
      <button value='Favorites' onClick={ props.updateCardContainer }>Favorites</button>
    </div>
  )
}

export default DisplaySelector;