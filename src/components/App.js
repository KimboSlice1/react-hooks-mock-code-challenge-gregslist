import React from "react"
import { useState, useEffect} from "react"
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {
  const [ listingsData, setListingsData ] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListingsData(listings))
    
  }, [])
  // console.log(listingsData)
  return (
    <div className="app">
      <Header listingsData = {listingsData}/>
      <ListingsContainer setListingsData = {setListingsData} listingsData = {listingsData}/>
    </div>
  );
}

export default App;
