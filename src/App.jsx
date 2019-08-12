import React, { Component } from "react";
import {
  Header,
  DetailsCard,
  ItemList,
  PersonDetails,
  RandomPlanet
} from "baseApp/components";
import TwoColumns from "./components/layout-wrappers/two-columns";
import { listWithData } from "./components/hoc";
import { StarWars } from "baseApp/services";
import "./App.css";
import { ErrorBoundry } from "components";

class App extends Component {
  state = {
    showRandomPlanet: true,
    selectedPerson: 5
  };

  toggleRandomPlanet = () => {
    this.setState({ showRandomPlanet: !this.state.showRandomPlanet });
  };

  onPersonSelected = personId => {
    this.setState({ selectedPerson: personId });
  };

  render() {
    const { showRandomPlanet, selectedPerson } = this.state;
    const planet = showRandomPlanet ? <RandomPlanet /> : null;

    const PlanetsList = listWithData(ItemList, StarWars.getAllPlanets);
    const StarshipsList = listWithData(ItemList, StarWars.getAllStarships);
    const personDetails = <PersonDetails personId={selectedPerson} />;

    return (
      <div className="stardb-app">
        <Header />
        {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <ErrorBoundry>
          <TwoColumns
            left={<PlanetsList renderItem="{item => `${item.name}`}" />}
            right={personDetails}
          />
        </ErrorBoundry>
        <TwoColumns
          left={
            <StarshipsList
              renderItem={({ name, model }) => `${name} - ${model}`}
            />
          }
          right={personDetails}
        />
      </div>
    );
  }
}

export default App;
