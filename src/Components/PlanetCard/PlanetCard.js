import React from 'react';

const PlanetCard = ({ name, terrain, population, climate, residents }) => {

  let residentNames = residents.toString()

  // const handleAction = () => {

  // }

  return (
    <article className="card">
      <h4>{name}</h4>
      <button className="favorite-button">Favorite</button>
      <p>Terrain: { terrain }</p>
      <p>Population: { population }</p>
      <p>Climate: { climate }</p>
      <p>Residents: { residentNames }</p>
    </article>
  )
}

export default PlanetCard