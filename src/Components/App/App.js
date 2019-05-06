import React, { Component } from 'react';
import DisplaySelector from '../DisplaySelector/DisplaySelector';
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

  componentDidMount = () => {
    const url = 'https://swapi.co/api/films'
    fetch(url)
    .then(response => response.json())
      .then(result => this.movieSelect(result))
      .then(() => this.fetchPeople())
      .then(() => this.fetchVehicles())
      .then(() => this.fetchPlanets())
      .catch(error => console.log(error.message))
    }

  updateCardContainer = (event) => {
    this.setState({ currentDisplay: event.target.value })
  }
  
  movieSelect = (fetchedMovies) => {
    let singleMovie = fetchedMovies.results.sort(() => 0.5 - Math.random()).pop();
    this.setState({ scrollingMovieInfo: singleMovie, isLoading: false })
  }

  fetchPeople = () => {
    const url = 'https://swapi.co/api/people/'
    fetch (url) 
      .then(response => response.json())
      .then(people => this.setState({ people: people.results}))
      .then(() => this.fillOutHomeworld(this.state.people))
      .catch(error => console.log(error.message))
  }

  fillOutHomeworld = (people) => {
    let updatedPeople = [];
    people.map(person => {
      return fetch(person.homeworld)
      .then(response => response.json())
      .then(homeworld => this.addHomeworld(homeworld.name, homeworld.population, person))
      .then(homeworldPerson => updatedPeople.push(homeworldPerson))
      .catch(error => console.log(error.message))
    });
    this.fillOutSpecies(this.state.people)
    this.setTimeout(function () { this.setState({ people: updatedPeople }) }, 0)
  }
  
  addHomeworld = (name, population, person) => {
    const homeworldInfo = { homeworldName: name, homeworldPopulation: population }
    return Object.assign(person, homeworldInfo)
  }

  fillOutSpecies = (people) => {
    let updatedPeople = [];
    people.map(person => {
      return fetch(person.species[0])
        .then(response => response.json())
        .then(species => this.addSpecies(species.name, species.language, person))
        .then(speciesPerson => updatedPeople.push(speciesPerson))
        .catch(error => console.log(error.message))
    })
    this.setTimeout(function () { this.setState({ people: updatedPeople }) }, 0)
  }

  addSpecies = (name, language, person) => {
    const speciesInfo = { speciesName: name, language: language }
    return Object.assign(person, speciesInfo)
  }

  fetchVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/'
      fetch(url)
      .then(response => response.json())
      .then(vehicles => this.setState({ vehicles: vehicles.results }))
      .then()
      .catch(error => console.log(error.message))
  }

  fetchPlanets = () => {
    const url = 'https://swapi.co/api/planets/'
    fetch(url)
      .then(response => response.json())
      .then(planets => this.setState({ planets: planets.results }))
      .then(() => this.fillOutPlanetResidentData(this.state.planets))
      .catch(error => console.log(error.message))
  }

  fillOutPlanetResidentData = (planets) => {
    let updatedPlanets = [];
    planets.map(planet => {
        return updatedPlanets.push(this.addResidentsToPlanet(planet));
    })
    this.setTimeout(function () { this.setState({ planets: updatedPlanets }) }, 0);
  }

  addResidentsToPlanet = (planet) => {
    let residents = []
    planet.residents.map(resident => {
      return fetch(resident)
        .then(response => response.json())
        .then(resident => residents.push(resident.name))
        .catch(error => console.log(error.message))
    })
    return this.createPlanetResidentObject(planet, residents)
  }

  createPlanetResidentObject = (planet, residents) => {
    let residentObject = { residents: residents};
    return Object.assign(planet, residentObject);
  }

  storeFavorite = (e) => {
    e.preventDefault();
    console.log('test')
  }

  render() {
    return (
      <div className="App">
        <h1>STAR SWAPI</h1>
        <DisplaySelector updateCardContainer={ this.updateCardContainer }/>
        <CardContainer 
          currentDisplay={ this.state.currentDisplay }
          people={ this.state.people } 
          vehicles={ this.state.vehicles }
          planets={ this.state.planets }
          isLoading={ this.state.isLoading }
          scrollingMovieInfo={ this.state.scrollingMovieInfo }
          storeFavorite= { this.storeFavorite }
        />
      </div>
    );
  }
}

export default App;
