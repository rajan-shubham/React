import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString, areaName, sla} = resInfo?.cards[2]?.card?.card?.info;
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(itemCards);

    return (
        <div className="min-h-screen menu">
            <h1>{name}</h1>
            <p>{avgRating} ({totalRatingsString}) - {costForTwoMessage}</p>
            <p>{cuisines.join(", ")}</p>
            <p>Outlet : {areaName}</p>
            <p>{sla.slaString}</p>

            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</li>))}
            </ul>
        </div>
    );
};

export default RestaurantMenu;