const VenueCard = ({ name, imageUrl, rating, reviewsCount, location, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-xs xl:max-w-[24rem] mx-auto">
      
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 text-white p-2">
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
      </div>

      <div className="p-4">
        <div className="mt-1 flex items-center">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-sm text-gray-500 ml-2">{rating} ({reviewsCount})</span>

          <span className="mx-2 text-gray-400">•</span>

          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-sm text-gray-500 ml-2">{location}</span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-[#231942]">${price}</span>
          <button
            className="bg-[#e76f51] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#f4a261]"
          >
            View Details
          </button>
        </div>  
      </div>
      
    </div>
  );
};

export default VenueCard;