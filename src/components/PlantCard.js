import React, {useState} from "react";

function PlantCard({plant, onInStock, onDeletePlant}) {

    const { id, name, image, price } = plant
    const [inStock, setInStock] = useState(false)

    function handleStock() {
      setInStock((inStock) => !inStock)
    }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleStock}>Out of Stock</button>
      ) : (
        <button onClick={handleStock} className="primary">In Stock</button>
      )}
      <button onClick={() => onDeletePlant(id)} className="emoji-button delete">🗑</button>
    </li>
  );
}

export default PlantCard;
