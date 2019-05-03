import React from 'react';
import PropTypes from 'prop-types';

const Card = (props, {name, birth_year}) => {

  let testShit = console.log('propsinCard', props)
  
  return (
    <div>
      <h2>{testShit}</h2>
      <p>{name}</p>
      {/* <p>{birth_year}</p> */}
      {/* <p>Homeworld: </p> */}
      <p>Species: </p>
      <p>Language: </p>
      {/* <h3>{title}</h3> */}
      {/* <p>{body}</p> */}
      {/* <button onClick={() => removeIdea(id)}>X</button> */}
    </div>
  )
}

export default Card;