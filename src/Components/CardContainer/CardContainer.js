import React, { Component } from 'react';
import Card from '../Card/Card'

const CardContainer = (props) => {

  let displayCards = props.dataSet.map(datum => {
    return <Card {...datum} />
  })

  return (
    <div>
      { displayCards }
    </div>
  )
}

export default CardContainer
