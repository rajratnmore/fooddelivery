import React, { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantCardContainer = (props) => {
    
    const filteredListOfRestaurant = props.filteredListOfRestaurant;

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    
    return(
        <div className="cardContainer container min-h-90 p-2 flex justify-center flex-wrap bg-stone-50"> 
            {
                filteredListOfRestaurant.map( (resCard, index) => (<Link key={resCard.id+index} className="m-3" to={"/restaurant/"+resCard.id}>                    
                    {
                        resCard.isOpen ? <RestaurantCardPromoted resCard={resCard}/> : <RestaurantCard resCard={resCard}/> 
                    }                    
                    </Link> ))
            }    
        </div>
    )
}

export default RestaurantCardContainer;