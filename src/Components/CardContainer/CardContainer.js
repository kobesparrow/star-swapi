import React, { Component } from 'react';
import HumanCard from '../HumanCard/HumanCard'

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
      console.log('What?')
      displayCards = props.dataSet.map(datum => {
        return <HumanCard {...datum} />
      });  
      break;
    case 2:
      day = "Tuesday";
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
