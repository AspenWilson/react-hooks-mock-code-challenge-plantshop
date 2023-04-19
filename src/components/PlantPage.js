import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState ([])
  const [searchKey, setSearchKey] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then ((resp) => resp.json())
    .then((plants) => setPlants(plants))
  }, [])

  function handleNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const searchedPlants = plants.filter((plant) => plant.name.toLowerCase().includes(searchKey.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={handleNewPlant}/>
      <Search setSearchKey={setSearchKey}/>
      <PlantList plants={searchedPlants} onSetPlants={setPlants}/>
    </main>
  );
}

export default PlantPage;
