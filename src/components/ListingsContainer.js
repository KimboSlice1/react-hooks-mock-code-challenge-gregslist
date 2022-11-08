import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsData}) {
  // console.log(listingsData)
  
  const renderListings = listingsData.map((listingObj) => {
    return (
      <ListingCard key = {listingObj.id} listingsData= {listingObj} />
    )
  })
  
  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
