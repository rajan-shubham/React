import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => { 
  
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestraunt] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  // When will the useEffect callback function will be called?
  // -> this callback function will be called after your component renders
  // Syntax: useEffect(Arrow function/ callback function, dependiency Array)
  useEffect(() => { 
    fetchData();
  }, []);
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    // Optional Chaining
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunt(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return (< Shimmer />);
  // }

  return listOfRestaurants.length === 0 ? (< Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button onClick={() => {
            // Filter the restraunt cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestraunt(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setFilteredRestraunt(filteredList);
        }} >Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {
          filteredRestaurant.map(resturant => <RestaurantCard key={resturant.info.id} resData={resturant} />)
        }
      </div>
    </div>
  );
};

export default Body;