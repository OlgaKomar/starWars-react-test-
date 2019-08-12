class StarWars {
  _apiBase = "https://swapi.co/api";
  _imageBase = "https://starwars-visualguide.com/assets/img";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}/${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResource("people/");
    return res.results.map(this._transformPerson);
  };

  getPerson = async id => {
    const res = await this.getResource(`people/${id}`);
    return this._transformPerson(res);
  };

  getAllPlanets = async () => {
    const res = await this.getResource("planets/");
    return res.results.map(this._transformPlanet);
  };

  getPlanet = async id => {
    const res = await this.getResource(`planets/${id}`);
    return this._transformPlanet(res);
  };

  getAllStarships = async () => {
    const res = await this.getResource("starships/");
    return res.results.map(this._transformStarship);
  };

  getStarship = async id => {
    const res = await this.getResource(`starships/${id}`);
    return this._transformStarship(res);
  };

  getPersonImage(id) {
    return `${this._imageBase}/characters/${id}.jpg`;
  }

  getPlanetImage(id) {
    return `${this._imageBase}/planets/${id}.jpg`;
  }

  getStarhipImage(id) {
    return `${this._imageBase}/starships/${id}.jpg`;
  }

  _extractId = url => {
    const idRegExp = /\/([0-9]*)\/$/;
    return url.match(idRegExp)[1];
  };

  _transformPerson = person => {
    return {
      id: this._extractId(person.url),
      name: person.name,
      gender: person.gender,
      eyeColor: person.eye_color,
      hairColor: person.hair_color,
      birthYear: person.birth_year
    };
  };

  _transformPlanet = planet => {
    return {
      id: this._extractId(planet.url),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = starship => {
    return {
      id: this._extractId(starship.url),
      name: starship.name,
      model: starship.model,
      costInCredits: starship.const_in_credits,
      length: starship.length
    };
  };
}

export default new StarWars();
