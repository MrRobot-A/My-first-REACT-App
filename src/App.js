import { useState } from 'react';
import './App.css';

const Person = (props) => {   /**This is a function component using props */
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.LastName}</h2>
    <h2>Age: {props.age}</h2>
    </>

  )
}

const App = () => {     /*Arrow function component*/
  return (
    <div className="App">
      <Person 
        name = "Angel" 
        LastName = "Sánchez" 
        age = {22} 
      />
      <Person 
        name = "David" 
        LastName = "Canche" 
        age = {43}
      />
    </div>
  );
}

export default App;
