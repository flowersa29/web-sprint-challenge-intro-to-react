import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios"
import styled from "styled-components"
import Character from "./components/Character"
import {Container, container} from 'reactstrap'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
   const [people, setPeople] = useState([])
   const [otherState, setotherState] = useState(0)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.




  useEffect(()=>{
    axios
    .get("https://swapi.dev/api/people/")
    .then(response =>{
      setPeople(response.data.results)
      console.log("this is res", response)
    })
  })

  return (
    <Container>
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <ul>
          {people.map(people =>{
            return <Character key={people.name + people.birth_year} name={people.name} title={people.name} Height={people.height} mass={people.mass} gender={people.gender} eye_color={people.eye_color} birth_year={people.birth_year}/>})}

      </ul>
    </div>
    </Container>
  );
}

export default App;
