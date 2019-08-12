import React, { Component } from "react";
import { StarWars } from "baseApp/services";
import "./random-planet.css";
import { Spinner, ErrorIndicator } from "components";

class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false
  };

  _interval = null;

  componentDidMount() {
    this.updatePlanet();
    this._interval = setInterval(this.updatePlanet, 30000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this._interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = err => {
    this.setState({ error: true, loading: false });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    StarWars.getPlanet(id)
      .then(res => this.onPlanetLoaded(res))
      .catch(res => this.onError(res));
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);

    const errorMsg = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMsg}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default RandomPlanet;
