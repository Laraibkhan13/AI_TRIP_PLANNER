import React, { useState } from 'react';

const LocationAutocomplete = ({ onSelectLocation }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (input) => {
    const apiKey = import.meta.env.VITE_GOMAP_API_KEY; // Replace with your actual Gomap API key
    const apiUrl = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input
    )}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.predictions) {
        setSuggestions(
          data.predictions.map((item) => ({
            description: item.description,
            place_id: item.place_id,
          }))
        );
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 2) {
      fetchSuggestions(input); // Fetch suggestions for inputs with length > 2
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (suggestion) => {
    setQuery(suggestion.description);
    setSuggestions([]);
    onSelectLocation(suggestion); // Pass the selected location to the parent component
  };

  return (
    <div className=''>
      <input
       className=' p-2 w-[780px] border rounded-md text-black'
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={'Ex. Bangalore'}
      />
      <ul className=' w-[780px]'>
        {suggestions.map((suggestion, index) => (
          <li className=' h-10 hover:border rounded-md p-2 'key={index} onClick={() => handleSelect(suggestion)}>
            {suggestion.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationAutocomplete;
