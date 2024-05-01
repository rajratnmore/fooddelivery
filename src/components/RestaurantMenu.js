import React, { useState } from 'react';
import MenuCard from './MenuCard';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    
    if(resInfo === null){
        return (<Shimmer />)
    }
    
    const { name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;
    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( (card) => {
        return (card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")        
    });

    const handleClick = function(){

    }

    return (
        <>
            <div className="menuContainer ">
                <div className="menuCard mx-auto bg-stone-200 mb-2  p-2 flex justify-between w-[600px]">
                    <div className="pb-2">
                        <h2 className="text-xl mb-1 font-semibold tracking-wide">{name}</h2>
                        <h3 className="text-sm">{cuisines.join(", ")}</h3>
                        <h3 className="text-sm">{costForTwoMessage}</h3>        
                    </div>
                </div> 
                
                {/* categories accordions */}
                <div className="accordionContainer mx-auto flex flex-wrap justify-center w-[600px]">
                    {
                        categories.map( (category, index) => <RestaurantCategory key={index} data={category?.card?.card} showItems={index === showIndex && true} setShowIndex={() => setShowIndex(index)}/>)
                    }
                </div>
            </div>
        </>
  ) 
}

export default RestaurantMenu;
