import React from 'react';
import PropTypes from 'prop-types';

const HumanCard = ({ name, homeworldName, speciesName, language, homeworldPopulation}) => {

  return (
    <article className="card">
      <h4>{name}</h4>
      <button className="favorite-button">Favorite</button>
      <p>Homeworld: { homeworldName }</p>
      <p>Species: { speciesName }</p>
      <p>Language: { language }</p>
      <p>Population: { homeworldPopulation }</p>
    </article>
  )
}

export default HumanCard;