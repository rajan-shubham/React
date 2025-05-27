import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks you're OFFLINE !!
    Please check your Internet connection.
  </h1>

  return listOfRestaurants.length === 0 ? (< Shimmer />) : (
    <div className="bg-white body z-10  min-h-screen">
      <div className="flex justify-center filter ">
        <div className="flex m-8 relative w-max search ">
          <input type="text" className="p-2.5 w-full text-sm rounded-s-lg border-gray-500 border-1" placeholder="Search Restaurants..." value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }}/>
          <button className="border-gray-500 border-1 rounded-e-lg bg-orange-400" onClick={() => {
            // Filter the restraunt cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestraunt(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className="h-12 w-auto my-8 border-gray-500 border-1 rounded-lg bg-orange-600 filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter(
            (res) => res.info.avgRating > 4.5
          );
          setFilteredRestraunt(filteredList);
        }} >Top Restaurants</button>
      </div>
      <div className="mx-42 pl-2 flex flex-wrap gap-8
      space-y-8 res-container">{
          filteredRestaurant.map(resturant => (
            <Link
              key={resturant?.info?.id}
              to={"/restaurants/" + resturant?.info?.id}
            >
              <RestaurantCard resData={resturant} />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Body;