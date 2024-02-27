import Special from "./Special"
import greekSalad from "../component_assets/greek salad.jpg";
import kulcha from "../component_assets/kulcha.jpg";
import lemonDessert from "../component_assets/lemon dessert.jpg";
import { useNavigate } from "react-router-dom";

export default function SpecialsSection () {

    const navigate = useNavigate();

    return (
        <div className="SpecialsSectionDiv">
            <h1>Today's Specials!</h1>
            <div id="SpecialsCarousel">
            <Special 
                title="Greek Salad"
                description="A really really old Salad made by a long-dead Greek guy. Herodotus says its great!"
                imageSrc={greekSalad}
            />
            <Special 
                title="Kulcha"
                description="This straight up slaps bro, no cap. Order in small quantities."
                imageSrc={kulcha}
            />
            <Special 
                title="Lemon Dessert"
                description="Ay! There's a lemon in the restaurant's name, AND in this food dish! Now that's what I call grade-A poetry."
                imageSrc={lemonDessert}
            />
            </div>
            <button id="order_button_special" onClick={() => navigate('/menu')}>Checkout full menu</button>
        </div>
    )
}

