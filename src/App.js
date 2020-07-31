import React, {useState, useEffect} from 'react';
import './App.css';
import fetchData from './utils/fetchData';

function App() {

  const [people, setPeople] = useState('');

  useEffect(()=>{

    if(people === ''){
      fetchData.fetchPeopleData(setPeople);
    }

  }, [people, setPeople]);

  const createCharacterListItems = ()=> {
    if(Object.keys(people).length > 0){
      return people.results.map((character, i)=>{
        return  <li key={i}>
                  <p>{character.name}</p>
                </li>
      });
    }
  }

  return (
    <div className="App">
      <ul>{createCharacterListItems()}</ul>
    </div>
  );
}

export default App;
