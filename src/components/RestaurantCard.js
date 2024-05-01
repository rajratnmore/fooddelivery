import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import {CDN_URL} from "../utils/CDN_URL";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const resCard = props.resCard;
    const {cloudinaryImageId, name, avgRating, cuisines, areaName, sla, costForTwo} = resCard;
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="w-[250px] bg-stone-200 rounded-t-lg rounded-b-lg mt-2 mx-4">
            <div className="rounded-xl mb-2">
                <img className="rounded-lg w-[250px] h-[170px]" src={CDN_URL+cloudinaryImageId} />
            </div>
            <div className="px-4 pb-4 "> 
                <h2 className="text-md font-medium">{name}</h2>
                <h3 className="text-md font-medium"><FontAwesomeIcon className="text-slate-400" icon={faStar} /> {avgRating}  {" - " + sla.slaString}</h3>
                <p className="text-sm font-base tracking-wider text-slate-900 mt-2">{costForTwo}</p>
                <p className="text-sm font-base text-slate-700">{cuisines.join(", ")}</p>
                <p className="text-sm font-base tracking-wider text-slate-600">{areaName}</p>
                <p className="text-sm font-base tracking-wider text-slate-600">User : {loggedInUser}</p>
            </div>
        </div>
    )

}

// Higher Order Component

// Input - RestauratnCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="">
                <label className="absolute bg-black text-white m-1 px-2 py-1 rounded-md"> Opened</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;