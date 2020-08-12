import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import CharactersList from './components/CharactersList/CharactersList'
import Characters from './components/Characters/Characters'
import PlanetList from './components/PlanetList/PlanetList'
import Planet from './components/Planet/Planet'

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
          <Route exact path='/planets/:id' render={(id)=> <Planet id={id}/>} />

          <Route exact path='/species' render={()=> <CharactersList/>} />
          <Route exact path='/species/:id' render={()=> <CharactersList/>} />

          <Route exact path='/starships' render={()=> <CharactersList/>} />
          <Route exact path='/starships/:id' render={()=> <CharactersList/>} />

          <Route exact path='/vehicles' render={()=> <CharactersList/>} />
          <Route exact path='/vehicles/:id' render={()=> <CharactersList/>} />

          <Route render={()=> <PageNotFound/>} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
