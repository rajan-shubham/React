import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => { 
  
  // State Variable - Super powerful variable
  let [listOfRestaurents, setlistOfRestaurents] = useState(resList);

  // let arr = useState(resList);
  // const listOfRestaurents = arr[0];
  // const setlistOfRestaurents = arr[1];

  // Normal JS Variable
  // let listOfRestaurents = null;

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          // Filter logic here
          filteredList = listOfRestaurents.filter(
            (res) => res.info.avgRating > 4
          );
          setlistOfRestaurents(filteredList);
        }} >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          listOfRestaurents.map(resturant => <RestaurantCard key={resturant.info.id} resData={resturant} />)
        }
      </div>
    </div>
  );
};

export default Body;