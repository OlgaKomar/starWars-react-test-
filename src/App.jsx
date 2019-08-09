import React from "react";
import {
  Header,
  DetailsCard,
  ItemList,
  RandomPlanet
} from "baseApp/components";

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6" />
        <DetailsCard />
      </div>
    </div>
  );
};

export default App;
