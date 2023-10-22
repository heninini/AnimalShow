import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} index={index} />;
  });
  return (
    <div className="app">
      <button onClick={() => setAnimals([...animals, getRandomAnimal()])}>
        Add Animal
      </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}
export default App;
