import React, { Component } from 'react';
import HumanCard from '../HumanCard/HumanCard';
import VehicleCard from '../VehicleCard/VehicleCard';

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
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  return (
    <section className="card-container">
      { displayCards }
    </section>
  )
}

export default CardContainer
