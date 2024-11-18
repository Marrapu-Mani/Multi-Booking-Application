import { useState } from 'react';

import VenueCard from '../components/VenueCard.jsx';
import { sportsFacilities } from '../utils/sportsFacilitiesData.js';

const SportsFacilitiesPage = () => {
  const venues = [...sportsFacilities];

  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [sportType, setSportType] = useState('All');

  const filteredVenues = venues.filter(venue => 
    (!location || venue.location.toLowerCase().includes(location.toLowerCase())) &&
    (!minPrice || venue.price >= parseInt(minPrice)) &&
    (!maxPrice || venue.price <= parseInt(maxPrice)) &&
    (!capacity || venue.capacity >= parseInt(capacity)) &&
    (sportType === 'All' || !sportType || venue.sports.split(',').map(type => type.trim()).includes(sportType))
  );

  return (
    <div className="px-4 py-4 xl:px-16">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#231942]">Sports Facilities</h1>

      <div className="mb-8 p-4 border rounded-lg shadow-sm bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            className="p-2 border rounded-md"
          />
          <input    
            type="number"
            placeholder="Capacity"
            value={capacity}
            onChange={e => setCapacity(e.target.value)}
            className="p-2 border rounded-md"
          />
          <select
            value={sportType}
            onChange={e => setSportType(e.target.value)}
            className="p-2 border rounded-md"
          >
            <option value="All">All Sports</option>
            <option value="Swimming">Swimming</option>
            <option value="Basketball">Basketball</option>
            <option value="Soccer">Soccer</option>
            <option value="Futsal">Futsal</option>
            <option value="Tennis">Tennis</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Ice Skating">Ice Skating</option>
            <option value="Golf">Golf</option>
            <option value="Badminton">Badminton</option>
          </select>
          <button className="bg-yellow-400 text-white px-4 py-2 rounded-lg">
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVenues.map(venue => (
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
    </div>
  );
};

export default SportsFacilitiesPage;
