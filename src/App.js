import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import PeopleList from './components/PeopleList/PeopleList'
import People from './components/People/People'
import PlanetList from './components/PlanetList/PlanetList'
import Planet from './components/Planet/Planet'

import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route exact path='/' render={()=> <Home/>} />

          <Route exact path='/people' render={()=> <PeopleList/>} />
          <Route exact path='/people/:id' render={()=> <People/>} />

          <Route exact path='/planets' render={()=> <PlanetList/>} />
          <Route exact path='/planets/:id' render={(id)=> <Planet id={id}/>} />

          <Route exact path='/species' render={()=> <PeopleList/>} />
          <Route exact path='/species/:id' render={()=> <PeopleList/>} />

          <Route exact path='/starships' render={()=> <PeopleList/>} />
          <Route exact path='/starships/:id' render={()=> <PeopleList/>} />

          <Route exact path='/vehicles' render={()=> <PeopleList/>} />
          <Route exact path='/vehicles/:id' render={()=> <PeopleList/>} />

          <Route render={()=> <PageNotFound/>} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
