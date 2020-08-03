import './App.css'
import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/Home/Home'
import Character from './components/Character/Character'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' render={()=> <Home/>} />
          <Route exact path='/people' render={()=> <Character data={'hello'}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
