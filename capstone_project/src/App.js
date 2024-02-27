import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
 
// import Home component
import Home from "./Home";
// import About component
import AboutUsMain from "./components/AboutUsPage_Components/AboutUsMain";
// import ContactUs component
import ContactUsMain from "./components/ContactUsPage_Components/ContactUsMain";
import React from 'react'
import ReservationPageMain from "./components/ReservationPage_Components/ReservationPageMain";
import MenuPageMain from "./components/MenuPage_Components/MenuPageMain";
import OrderOnlinePageMain from "./components/OnlineOrderPage_Components/OrderOnlinePageMain";
import LoginPageMain from "./components/LoginPage_Components/LoginPageMain";
import Alert from "./components/Alert";

 
function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Routes>
                    {/* This route is for home component 
                    with exact path "/", in component props 
                    we passes the imported component*/}
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />
 
                    {/* This route is for about component 
                    with exact path "/about", in component 
                    props we passes the imported component*/}
                    <Route
                        path="/about"
                        element={<AboutUsMain />}
                    />
 
                    {/* This route is for contactus component
                    with exact path "/contactus", in 
                    component props we passes the imported component*/}
                    <Route
                        path="/contactus"
                        element={<ContactUsMain />}
                    />

                    <Route
                        path="/reservation"
                        element={<ReservationPageMain />}
                    />

                    <Route
                        path="/menu"
                        element={<MenuPageMain />}
                    />

                    <Route
                        path="/orderonline"
                        element={<OrderOnlinePageMain />}
                    />

                    <Route
                        path="/login"
                        element={<LoginPageMain />}
                    />
 
                    {/* If any route mismatches the upper 
                    route endpoints then, redirect triggers 
                    and redirects app to home component with to="/" */}
                    {/* <Redirect to="/" /> */}
                    <Route
                        path="*"
                        element={<Navigate to="/" />}
                    />
                </Routes>
            </Router>
            <Alert />
        </>
    );
}
 
export default App;