import React from "react";
import foodDish from "../component_assets/lemongrass.avif";
 
const OrderOnlinePageMain = () => {
    return (
        <div>
            <h1>Order Online Page</h1>
            <img src={foodDish} alt="A tasty dish" width={"900px"} height={"600px"}/>
        </div>
    );
};
 
export default OrderOnlinePageMain;