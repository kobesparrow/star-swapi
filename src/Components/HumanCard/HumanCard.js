import React from 'react';
import PropTypes from 'prop-types';

const HumanCard = ({ name, homeworldName, speciesName, language, homeworldPopulation}) => {

  return (
    <article className="card">
      {/* <h2>{testShit}</h2> */}
      <h4>{name}</h4>
      <button className="favorite-button">Favorite</button>
      <p>Homeworld: { homeworldName }</p>
      <p>Species: { speciesName }</p>
      <p>Language: { language }</p>
      <p>Population: { homeworldPopulation }</p>
      {/* <h3>{title}</h3> */}
      {/* <p>{body}</p> */}
    </article>
  )
}

export default HumanCard;