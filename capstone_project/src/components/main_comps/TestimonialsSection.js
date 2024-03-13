import Testimonial from "./Testimonial"
import kejriwal from "../component_assets/kejriwal-4.webp";
import oda from "../component_assets/Eiichiro_Oda.webp";
import sachin from "../component_assets/Sachin-Tendulkar.jpg";

export default function TestimonialsSection () {

    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="TestimonialsSectionDiv">
            <h1>Our customers after a meal</h1>
            <div id="TestimonialsCarousel">
            <Testimonial 
                title="Arvind Kejriwal"
                description="Great food for the common man!"
                imageSrc={kejriwal}
            />
            <Testimonial 
                title="Eiichiro Oda"
                description="Aaah I'm so full I can't walk! Break next week."
                imageSrc={oda}
            />
            <Testimonial 
                title="Sachin Tendulkar"
                description="Ay vedyaaa, little lemon me nahi khaya toh bat ka grip nikaalke..."
                imageSrc={sachin}
            />
            </div>
            <button id="top_button_special" onClick={handleBackToTop}>Back to Top</button>
        </div>
    )
}