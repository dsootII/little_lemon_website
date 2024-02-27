import HeroSection from "./main_comps/HeroSection";
import SpecialsSection from "./main_comps/SpecialsSection";
import TestimonialsSection from "./main_comps/TestimonialsSection";

export default function Main () {

    return (
        <main className="MAIN">
            <HeroSection/>
            <SpecialsSection/>
            <TestimonialsSection/>
        </main>
    );
}