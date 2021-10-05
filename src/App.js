import * as React from 'react'
import Pokecard from "./Pokecard";
import Pokedex from './Pokedex';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <div id="title">
        <h2 >Pokedex</h2>
      </div>
      <div class="parent">
        {Pokedex.map(p => <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />)}
      </div>    
    </React.Fragment>
  );
}

export default App;
