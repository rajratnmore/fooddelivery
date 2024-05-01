import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import MenuCard from './MenuCard';
import {addItem, removeItem, clearCart} from "../utils/reduxSlices/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
      dispatch(clearCart());
  }

  return (
        <>
        <div className="flex justify-center">
          <div className="">
                <h1 className="text-center font-bold tracking-wider text-lg m-4">Cart</h1>
                <div className="flex justify-end">
                  {cartItems.length>0 && 
                    <button className="mb-2 px-4 py-1 border border-slate-200 rounded-md bg-cyan-800 text-white" onClick={handleClearCart}>clear cart</button>
                  }
                </div>
                {
                  cartItems.length < 1 && <h2 className="font-medium">Your cart is Empty! Please add a Food Item</h2>
                }
                <div className="">
                  {
                    cartItems.map((card) => <MenuCard key={card.card.info.id} card={card} itemRemove={true}/>)
                  }                
                </div>     
          </div>
        </div>   
        </>
  )
}

export default Cart
