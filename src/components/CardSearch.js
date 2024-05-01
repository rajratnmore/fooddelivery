import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import UserContext from "../utils/UserContext";

const CardSearch = (props) => {

    const [searchText, setSearchText] = useState("");
    const {loggedInUser, setUserName} = useContext(UserContext);

    return (
        <div className="container h-20 p-5 flex justify-center">
                <button className="bg-stone-400 px-5 rounded-lg text-white font-medium hover:text-orange-400 hover:bg-slate-300 tracking-wider" onClick={
                    () => {
                        props.filteredTopRatedRestaurant();                                           
                    }
                }>top rated restaurant</button>
                <div className="mx-2 flex shadow-2xl">
                    <FontAwesomeIcon className="bg-stone-50 mr-0  p-[9px] text-xl rounded-l-lg border border-l-stone-300 border-r-stone-50 border-t-stone-300 border-b-stone-300 outline-none" icon={faMagnifyingGlass} />
                    <input className="bg-stone-50 w-96 ml-0 rounded-r-lg h-full border border-l-stone-50 border-r-stone-300 border-t-stone-300 border-b-stone-300 outline-none text-slate-700 text-lg" type="search" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value);
                    }}/>
                </div>
                <button className="bg-slate-700 px-5 w-28 rounded-lg text-white font-medium hover:text-orange-400 hover:bg-slate-300 tracking-wider" onClick={() => {
                    props.filteredRestaurantListOnSearch(searchText);
                    setSearchText("");
                }}>search</button>
                <div className="mx-2 flex items-center">
                    <label className="px-2 font-medium">UserName : </label>
                    <input className="bg-stone-50 px-2 rounded-lg h-full border border-stone-300  outline-none text-slate-700 text-lg" value={loggedInUser} onChange={(e) =>{
                        setUserName(e.target.value);
                    }}/>
                </div>
            </div>
    )
}

export default CardSearch;

