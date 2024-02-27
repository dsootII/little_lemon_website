import Testimonial from "./Testimonial"
import kejriwal from "../component_assets/kejriwal-4.webp";
import lata from "../component_assets/lata8_0.webp";
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
                title="Lata Mangeshkar"
                description="AAAAaaaa! OUuuuuu! ummm hmmmmmmm"
                imageSrc={lata}
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