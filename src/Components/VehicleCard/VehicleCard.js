import React from 'react';

const VehicleCard = ({ name, model, vehicle_class, passengers }) => {

  return (
    <article className="card">
      <h4>{name}</h4>
      <button className="favorite-button">Favorite</button>
      <p>Model: { model }</p>
      <p>Class: { vehicle_class }</p>
      <p>Passengers: {passengers }</p>
    </article>
  )
}

export default VehicleCard;