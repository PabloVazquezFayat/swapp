import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import CharactersList from './components/CharactersList/CharactersList'
import Characters from './components/Characters/Characters'
import PlanetList from './components/PlanetList/PlanetList'
import Planet from './components/Planet/Planet'
import SpeciesList from './components/SpeciesList/SpeciesList'
import Species from './components/Species/Species'
import StarshipList from './components/StarshipList/StarshipList'
import Starship from './components/Starship/Starship'
import VehicleList from './components/VehicleList/VehicleList'
import Vehicle from './components/Vehicle/Vehicle'

import PageNotFound from './components/PageNotFound/PageNotFound'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path='/' render={()=> <Home/>} />

          <Route exact path='/characters' render={()=> <CharactersList/>} />
          <Route exact path='/characters/:id' render={()=> <Characters/>} />

          <Route exact path='/planets' render={()=> <PlanetList/>} />
          <Route exact path='/planets/:id' render={(id)=> <Planet/>} />

          <Route exact path='/species' render={()=> <SpeciesList/>} />
          <Route exact path='/species/:id' render={()=> <Species/>} />

          <Route exact path='/starships' render={()=> <StarshipList/>} />
          <Route exact path='/starships/:id' render={()=> <Starship/>} />

          <Route exact path='/vehicles' render={()=> <VehicleList/>} />
          <Route exact path='/vehicles/:id' render={()=> <Vehicle/>} />

          <Route render={()=> <PageNotFound/>} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
