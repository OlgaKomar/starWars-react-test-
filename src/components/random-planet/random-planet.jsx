import React, { Component } from "react";
import { StarWars } from "baseApp/services";

class RandomPlanet extends Component {
  state = {
    id: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = 10;
    StarWars.getPlanet(id).then(res =>
      this.setState({
        id,
        name: res.name,
        population: res.population,
        rotationPeriod: res.rotation_period,
        diameter: res.diameter
      })
    );
  }

  render() {
    const { id, name, population, rotationPeriod, diameter } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt=""
          className="item-image"
        />
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span>Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span>Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default RandomPlanet;
