import React from "react";
import { useState } from "react";

function ListingCard({listingsData}) {
  // console.log(listingsData)
  const [ favButton, setFavButton] = useState(false)
  const [ trashButton, setTrashButton] = useState(true)


  const handleFavButton = () => {
    setFavButton(!favButton)
   
  }
  const handleTrashButton = () => {
    setFavButton(!favButton)
  }


  
  //console.log(unfavButton)
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listingsData.image} alt={"description"} />
      </div>
      <div className="details">
        {favButton ? (
          <button onClick= {handleFavButton} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick= {handleFavButton} className="emoji-button favorite">☆</button>
        )}
        <strong>{listingsData.description}</strong>
        <span> · {listingsData.location}</span>
        <button onClick = { handleTrashButton }className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
