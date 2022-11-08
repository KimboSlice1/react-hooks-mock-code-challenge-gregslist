import React from "react";
import Search from "./Search";

function Header({listingsData}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listingsData = {listingsData}/>
    </header>
  );
}

export default Header;
