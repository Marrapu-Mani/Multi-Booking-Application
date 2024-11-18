import { useOutletContext } from "react-router-dom";

import ImageSlider from "../components/ImageSlider.jsx";
import AboutSection from "../components/AboutSection.jsx";
import FeaturedVenues from "../components/FeaturedVenues.jsx";
import { functionHalls } from '../utils/funtionHallsData.js'
import { sportsFacilities } from '../utils/sportsFacilitiesData.js';
import { wellnessServices } from '../utils/wellnessServicesData.js';
import Footer from "../components/Footer.jsx";

export default function HomePage() {
    const { aboutSectionRef } = useOutletContext();

    const sections = [
        { title: "Featured Function Halls", venues: functionHalls, target: "/function-halls" },
        { title: "Featured Sports Facilities", venues: sportsFacilities, target: "/sports-facilities" },
        { title: "Featured Wellness Services", venues: wellnessServices, target: "/wellness-services" },
    ];

    return (
        <>
            <ImageSlider />
            <AboutSection ref={aboutSectionRef} />
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                    <FeaturedVenues title={section.title} venues={section.venues} target={section.target} />
                </div>
            ))}
            <Footer />
        </>
    )
}