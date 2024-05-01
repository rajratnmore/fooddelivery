import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import navLinks from "./utils/navLinks";
import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";

// import Grocery from "./components/Grocery";
const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {

    const [userName, setUserName] = useState();

    // Authentication
    useEffect(() => {
        // Make an API calls and send user name and password
        const data = { name : "Rajratn More"};
        setUserName(data.name);
    },[]);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                <>  
                    <Header navLinks={navLinks}/>   
                    <Outlet />  
                </>        
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);