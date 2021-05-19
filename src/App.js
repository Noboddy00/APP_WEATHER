import React, { useState } from 'react'
import { Route } from 'react-router';
import About from './components/About';
import Cards from './components/Cards';
import Nav from './components/Nav';
import Ciudad from './components/Ciudad';

const apiKey = "e971cf7f9b0bfd0a24087a5b3c3bbaa7";

export default function App() {

  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(r => r.json())
      .then((receiver) => {
        if (receiver.main !== undefined) {
          const city = {
            temp_min: Math.round(receiver.main.temp_min),
            temp_max: Math.round(receiver.main.temp_max),
            description: receiver.weather[0].description,
            img: receiver.weather[0].icon,
            description: receiver.weather[0].description,
            humidity: receiver.main.humidity,
            weather: receiver.weather[0].main,
            clouds: receiver.clouds.all,
            id: receiver.id,
            name: receiver.name
          };
          setCities([...cities, city]) // al estado anterior le agrego la nueva ciudad
        } else {
          alert("City not found");
        };
      });
  };

  function onClose(id) {
    setCities(cities.filter(c => c.id !== id)); // elimino del estado actual la ciudad seleccionada
  };

function onFilter(ciudadId){ //filtro el id de la ciudad seleccionada para obtener sus datos
  return  cities.find (c => c.id === parseInt(ciudadId));
}

  return (
    <div >
      <Route path='/' render={() => <Nav onSearch={onSearch} />} />
      <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
      <Route path='/about' component={About} />
      <Route exact path='/ciudad/:ciudadId' render={({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
    </div>
  );
};

