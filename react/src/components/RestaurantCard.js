import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
};

const RestaurantCard = (props) => {
    // console.log({ props }) // props is an JS Object
    const { resData } = props;
  
    const {
      cloudinaryImageId, name, avgRating, cuisines, costForTwo,
    } = resData?.info;
    const {slaString} = resData?.info?.sla
  
  return (
    <div className="w-60 h-108 bg-white border border-gray-200 rounded-lg shadow-sm res-card" style={styleCard} >
      <div className="p-4">
        <img className="rounded-lg res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
        </div>
    </div>
  );
};
  
export default RestaurantCard;