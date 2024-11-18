import { useNavigate } from 'react-router-dom';

import VenueCard from "./VenueCard.jsx";

const FeaturedVenues = ({ title, venues, target }) => {
  const topVenues = [...venues].sort((a, b) => b.rating - a.rating).slice(0, 3);

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <div className="p-4 xl:px-16">
      <h2 className="text-2xl font-bold mb-4 text-[#231942] text-left">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topVenues.map((venue) => (
          <VenueCard
            key={venue.id}
            name={venue.name}
            imageUrl={venue.imageUrl}
            rating={venue.rating}
            reviewsCount={venue.reviewsCount}
            location={venue.location}
            price={venue.price}
          />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button 
          onClick={() => handleClick(target)}
          className="relative overflow-hidden h-12 px-8 rounded-full bg-[#231942] text-white border-none cursor-pointer group"
        >
          <span className="relative z-10">Show More</span>
          <span className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-r from-[#e76f51] to-[#f4a261] scale-x-0 transform origin-left transition-transform duration-[475ms] group-hover:scale-x-100"></span>
        </button>
      </div>
    </div>
  );
};

export default FeaturedVenues;
