import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { LOGO } from "../utils/CDN_URL";
import UserContext from "../utils/UserContext";
import { useSelector} from "react-redux";

const Header = (props) => {
    
    const [logBtnName, setLogBtnName] = useState("LOGIN");
    const navLinks = props.navLinks;
    const {loggedInUser} = useContext(UserContext);
    // console.log(data);

    // subscribing to the store using selector
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    return (    
        <header className="px-5 ">
            <div className="container h-20 flex justify-between items-center">
                {/* logo here */}
                <div className="">
                    <img className="w-[70px] h-[70px] rounded-lg" src={LOGO} />
                </div>
                
                {/* navbar here */}
                
                <nav className="p-4 font-medium flex">
                    <ul className="flex justify-around">
                        {
                            navLinks.map( (link) => {
                                if(link.name === "cart"){
                                    return <li key={link.id} className="mx-4 hover:text-orange-500 text-slate-700 tracking-wider font-bold"><Link to={link.linkTo}>{link.name} -({cartItems.length} items)</Link></li>
                                }else{
                                    return <li key={link.id} className="mx-4 hover:text-orange-500 text-slate-700 tracking-wider"><Link to={link.linkTo}>{link.name}</Link></li>
                                }
                                
                            })
                        }
                    </ul>
                    <button className="px-4" onClick={()=>{
                        setLogBtnName( (logBtnName === "LOGIN") ? "LOGOUT" : "LOGIN");
                    }}>{logBtnName}</button>
                    <p>{loggedInUser}</p>
                </nav>
            </div>
        </header>
    )
}

export default Header;