import React from 'react';
import HumanCard from '../HumanCard/HumanCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import Loader from '../Loader/Loader';
import ScrollingText from '../ScrollingText/ScrollingText';

const CardContainer = (props) => {

  let displayCards
  
  switch (props.currentDisplay) {
    case 'intro':
      displayCards =
        props.isLoading ?
            <Loader /> :
            <ScrollingText scrollingMovieInfo={ props.scrollingMovieInfo } /> 
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
          <p>this is where your favorites should be</p>
        </div>
      break;
    default: 
      displayCards = <Loader />
  }

  return (
    <section className="card-container">
      { displayCards }
    </section>
  )
}

export default CardContainer
