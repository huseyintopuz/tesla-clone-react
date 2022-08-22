import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import ModelS from './cars/models';
import Model3 from './cars/model3';
import ModelX from './cars/modelx';
import ModelY from './cars/modely';
import SolarRoof from './cars/solarroof'
import SolarPanels from './cars/solarpanels'
import { selectCars } from './features/car/carSlice'
import { useSelector } from 'react-redux';

const App = () => {
  document.title = "Tesla.com"
  const cars = useSelector(selectCars)

  const slugify = Text => {
    return Text.toLowerCase()
      .replace(/ /g, '')
      .replace(/[^\w-]+/g, '');
  };

  function getElement(param) {
    let element = null;
    switch (param) {
      case 'models':
        element = <ModelS />;
        break;
      case 'model3':
        element = <Model3 />;
        break;
      case 'modelx':
        element = <ModelX />
        break;
      case 'modely':
        element = <ModelY />
        break;
      case 'solarroof':
        element = <SolarRoof />
        break;
      case 'solarpanels':
        element = <SolarPanels />
        break;
      default:
        break;
    }
    return element
  }

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {cars && cars.map((car, index) => (
            <Route key={index} path={`/${slugify(car)}`} element={getElement(slugify(car))} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
