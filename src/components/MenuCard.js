import React from 'react';
import { MENU_API_IMAGE } from '../utils/CDN_URL';
import {useDispatch } from "react-redux";
import { addItem, removeItem} from "../utils/reduxSlices/cartSlice";
import loadingDishImage from "../../images/loadingDish.jpg";

const MenuCard = ({card, itemRemove}) => {
    
    const {name, price, description, imageId} =  card?.card?.info;
        
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item));

    }

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    }

  return (
    <>
        {itemRemove && <button className="relative left-[460px] top-[20px] px-4 border-[1px]  border-slate-400 border-solid rounded-md bg-slate-800 text-white " onClick={() => {handleRemoveItem(card)}}>X</button>}
        <div className="menuCard mb-0 bg-stone-100  p-2 flex justify-between w-[500px] border-b-[1px] border-slate-400 border-solid rounded-lg">
            <div className="w-[600px]">
                <h2 className="text-slate-900 text-lg font-medium">{name}</h2>
                <p className="text-slate-500">₹ {price/100}</p>
                <h3 className="text-sm"> {description} </h3>
            </div>
            <div>
                {
                    imageId? <img className="w-[150px] object-cover" src={MENU_API_IMAGE+imageId} /> : <img className="w-[150px]" src={loadingDishImage} />
                }                
                {
                    !itemRemove && <button className="addBtn relative m-auto px-4 py-1 top-[-15px] left-2 border-[1px]  border-slate-400 border-solid rounded-md bg-slate-800 text-white " onClick={() => {handleAddItem(card)}}>Add + </button>
                }                
            </div>
            
        </div>
    </>
  )
}

export default MenuCard;
