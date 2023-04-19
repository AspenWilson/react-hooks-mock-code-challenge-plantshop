import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onSetPlants}) {

  function handleDelete (plantId) {
    fetch(`http://localhost:6001/plants/${plantId}` ,{
      method: 'DELETE', 
    })
    .then(resp => resp.json())
    .then(() => {
      const remainingPlants = plants.filter((plant) => plant.id !== plantId)
      onSetPlants(remainingPlants)
    })
  }


  const allPlants = plants.map((plant) => {
    return <PlantCard key={plant.id} plant={plant} onDeletePlant={handleDelete} />
  })

  return (
    <ul className="cards">{allPlants}</ul>
  );
}

export default PlantList;
