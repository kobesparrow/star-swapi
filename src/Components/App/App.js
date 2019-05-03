import React, { Component } from 'react';
// import './App.css';
import DisplaySelector from '../DisplaySelector/DisplaySelector';
import ScrollingText from '../ScrollingText/ScrollingText';
import Loader from '../Loader/Loader';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      scrollingMovieInfo: {},
      people: [],
      planets: [],
      vehicles: [],
      favorites: [],
      currentDisplay: 'intro'
    }
  }
  
  movieSelect = (fetchedMovies) => {
    let singleMovie = fetchedMovies.results.sort(() => 0.5 - Math.random()).pop();
    this.setState({ scrollingMovieInfo: singleMovie, isLoading: false })
  }

  componentDidMount = () => {
    const url = 'https://swapi.co/api/films'
    fetch (url)
      .then (response => response.json())
      .then (result => this.movieSelect(result))
      .then (() => this.fetchPeople())
      .catch (error => console.log(error.message))
  }

  fetchPeople = () => {
    const url = 'https://swapi.co/api/people/'
    fetch (url) 
      .then (response => response.json())
      .then (people => this.setState({ people: people.results }))
      .then (() => this.fetchVehicles())
      .catch (error => console.log(error.message))
  }

  fetchVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/'
      fetch (url)
      .then (response => response.json())
      .then (vehicles => this.setState({ vehicles: vehicles.results }))
      .then (() => this.fetchPlanets())
      .catch (error => console.log(error.message))
  }

  fetchPlanets = () => {
    const url = 'https://swapi.co/api/planets/'
    fetch(url)
      .then (response => response.json())
      .then (planets => this.setState({ planets: planets.results }))
      .catch(error => console.log(error.message))
  }

  updateCardContainer = (event) => {
    this.setState({ currentDisplay: event.target.value })
    console.log(event.target.value)
  }

  render() {
  return (
    <div className="App">
      <h1>STAR SWAPI</h1>
      <DisplaySelector updateCardContainer={ this.updateCardContainer }/>
      <CardContainer dataSet={ this.state.people } />
      {this.state.isLoading ?
        <Loader /> :
        <ScrollingText scrollingMovieInfo={ this.state.scrollingMovieInfo } />}
    </div>
  );
  }
}

export default App;
