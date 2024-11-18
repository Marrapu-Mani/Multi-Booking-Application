import React, { useRef, forwardRef, useImperativeHandle} from 'react';

const AboutSection = forwardRef((props, ref) => {
    const sectionRef = useRef();

    useImperativeHandle(ref, () => ({
        scrollToSection() {
            if (sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }));

    return (
        <section ref={sectionRef} className="bg-gray-100 py-16 px-8 md:px-16 lg:px-24">
            <div className="max-w-5xl mx-auto text-center">

                <h2 className="text-4xl font-bold text-[#231942] mb-4">About FineVenue</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Welcome to FineVenue - your all-in-one platform for booking exceptional venues and services! From elegant function halls and premium sports facilities to rejuvenating wellness experiences, FineVenue makes booking effortless. Elevate every event, game, and relaxation with ease.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold text-[#e76f51] mb-2">Function Halls</h3>
                        <p className="text-gray-600">
                            Host unforgettable weddings, parties, and corporate events in our spacious and stylish function halls designed to make every occasion memorable.
                        </p>
                    </div>

                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold text-[#e76f51] mb-2">Sports Facilities</h3>
                        <p className="text-gray-600">
                            Discover top-notch sports grounds and courts for your favorite activities. From football and tennis to cricket, we bring you the best playing experience.
                        </p>
                    </div>
                    
                    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out">
                        <h3 className="text-2xl font-semibold text-[#e76f51] mb-2">Wellness Services</h3>
                        <p className="text-gray-600">
                            Refresh your mind and body with our wide range of wellness services, including luxurious spas and tailored therapy sessions for ultimate relaxation.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
    );
});

export default AboutSection;
