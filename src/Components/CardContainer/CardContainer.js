import React, { Component } from 'react';
import HumanCard from '../HumanCard/HumanCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PlanetCard from '../PlanetCard/PlanetCard';

const CardContainer = (props) => {

  let displayCards
  let day
  
  switch (props.currentDisplay) {
    case 'intro':
      displayCards = 
      <div>
        <p>this is the intro</p>
      </div>
      break;
    case 'People':
      displayCards = props.people.map(person => {
        return <HumanCard {...person} />
      });  
      break;
    case 'Vehicles':
      displayCards = props.vehicles.map(vehicle => {
        return <VehicleCard {...vehicle} />
      });
      break;
    case 'Planets':
      displayCards = props.planets.map(planet => {
        return <PlanetCard {...planet} />
      });
      break;
    case 'Favorites':
      displayCards =
        <div>
          <p>this is the favorites</p>
        </div>
  }

  return (
    <section className="card-container">
      { displayCards }
    </section>
  )
}

export default CardContainer
