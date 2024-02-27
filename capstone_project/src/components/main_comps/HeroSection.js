import { useNavigate } from "react-router-dom";
import foodDish from "../component_assets/food_dish";


export default function HeroSection () {

    const navigate = useNavigate();

    return (
        <div className="HeroSectionDiv">
            <div className="HeroSectionTextPartDiv">
                <section>
                    <h1>Experience delightful cuisine at Little Lemon Mumbai.</h1>
                    <p>
                        Welcome to Little Lemon Mumbai, a culinary haven where zest meets tradition, and every dish tells a vibrant story of flavor. 
                        Nestled in the heart of Mumbai, our imaginary restaurant is a celebration of the city's rich culinary heritage fused with the invigorating essence of lemon.
                    </p>
                </section>
                <button id="reserve_button" onClick={() => navigate('/reservation')}>Reserve a table</button>
                <button id="order_button" onClick={() => navigate('/orderonline')}>Order online</button>
            </div>
            <img src={foodDish} alt="A tasty dish" width={"900px"} height={"600px"}/>
        </div>
    )
}