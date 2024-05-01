import React, { useState } from 'react';
import MenuCard from './MenuCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';


const RestaurantCategory = (props) => {
    
  const {data, showItems, setShowIndex} = props;
    
  return (
    <div className="mb-1">
        {/* Header */}
        
        <div className="accordionHeader bg-stone-200 flex justify-between w-[500px] mt-0 border-[1px] p-1 border-solid rounded-md" onClick={()=>{setShowIndex()}}>
            <span className="text-lg font-bold">{data.title} ({data.itemCards.length})</span>
            { (!showItems) ? (<span className="text-xl hover:cursor-pointer select-none"><FontAwesomeIcon icon={faArrowUp} /></span>) : (<span className="text-xl hover:cursor-pointer select-none"><FontAwesomeIcon icon={faArrowDown} /></span>) }
        </div>
        {/* Accordian Body */}
        { showItems && 
            <div className="accordionBody">{(data.itemCards.map( (card) => (<MenuCard key={card.card.info.id} card={card} /> )))}</div>
        }

    </div>
  )
}

export default RestaurantCategory;
