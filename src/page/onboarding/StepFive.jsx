// import React from 'react'

// const StepFive = () => {
//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">Where are you joining from?</h1>
//       <p>My nationality is:</p>
//       <input className="bg-main_100 w-full outline-none border-none text-black px-3 py-2 rounded-md" type="date" placeholder="DD-MM-YY"/>
//     </div>
//   )
// }

// export default StepFive

// -------- step two ---------
// import { useState, useEffect } from 'react';
// import { BiChevronDown } from 'react-icons/bi';

// const StepFive = ({handleChange}) => {
//   const [countries, setCountries] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchCountries = async () => {
//       try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = await response.json();
//         const sortedCountries = data.sort((a, b) => 
//           a.name.common.localeCompare(b.name.common)
//         );
//         setCountries(sortedCountries);
//       } catch (error) {
//         console.error('Error fetching countries:', error);
//       }
//     };

//     fetchCountries();
//   }, []);

//   const filteredCountries = countries.filter(country =>
//     country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">Where are you joining from?</h1>
//       <p>My nationality is:</p>
      
//       <div className="relative w-full z-[999]">
//         {/* Selected country display / dropdown trigger */}
//         <div
//           onClick={() => setIsOpen(!isOpen)}
//           className="bg-main_100 w-full flex items-center justify-between cursor-pointer px-3 py-2 rounded-md"
//         >
//           {selectedCountry ? (
//             <div className="flex items-center gap-2">
//               <img 
//                 src={selectedCountry.flags.svg} 
//                 alt={`${selectedCountry.name.common} flag`}
//                 className="w-6 h-4 object-cover"
//               />
//               <span>{selectedCountry.name.common}</span>
//             </div>
//           ) : (
//             <span className="text-gray-500">Select a country</span>
//           )}
//           <BiChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//         </div>

//         {/* Dropdown */}
//         {isOpen && (
//           <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-72 overflow-y-auto">
//             {/* Search input */}
//             <div className="sticky top-0 bg-white p-2 border-b border-gray-200">
//               <input
//                 type="text"
//                 placeholder="Search countries..."
//                 value={searchQuery}
//                 name='country'
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                 onClick={(e) => e.stopPropagation()}
//               />
//             </div>

//             {/* Country list */}
//             <select onChange={handleChange} className="py-1">
//               {filteredCountries.map((country) => {
//                 const currentCountry = country.name.common
//                 return (
//                 <option
//                 value={currentCountry}
//                   key={country.cca3}
//                   className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
//                   onClick={() => {
//                     setSelectedCountry(country);
//                     setIsOpen(false);
//                     setSearchQuery('');
//                   }}
//                 >
//                   <img 
//                     src={country.flags.svg} 
//                     alt={`${country.name.common} flag`}
//                     className="w-6 h-4 object-cover"
//                   />
//                   <span>{country.name.common}</span>
//                 </option>)
// })}
//               {filteredCountries.length === 0 && (
//                 <div className="px-3 py-2 text-gray-500">No countries found</div>
//               )}
//             </select>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StepFive;

// ---- version 2 ------
import { useState, useEffect } from "react";
import { BiChevronDown } from "react-icons/bi";

const StepFive = ({ handleChange }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const sortedCountries = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchQuery("");
    // Simulate an input event to pass to handleChange
    const event = {
      target: {
        name: "nationality",
        value: country.name.common,
      },
    };
    handleChange(event);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <h1 className="font-medium text-xl">Where are you joining from?</h1>
      <p className="text-sm text-gray-600">My nationality is:</p>

      <div className="relative w-full z-[999]">
        {/* Dropdown Trigger */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between cursor-pointer px-4 py-2 rounded-md border shadow-sm bg-gray-100 text-gray-900 transition-colors duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {selectedCountry ? (
            <div className="flex items-center gap-2">
              <img
                src={selectedCountry.flags.svg}
                alt={`${selectedCountry.name.common} flag`}
                className="w-6 h-4 object-cover"
              />
              <span>{selectedCountry.name.common}</span>
            </div>
          ) : (
            <span className="text-gray-500">Select a country</span>
          )}
          <BiChevronDown
            className={`w-5 h-5 transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-72 overflow-y-auto">
            {/* Search Input */}
            <div className="sticky top-0 bg-white p-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search countries..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm"
                onClick={(e) => e.stopPropagation()} // Prevent closing dropdown
              />
            </div>

            {/* Country List */}
            <div className="py-1">
              {filteredCountries.map((country) => (
                <div
                  key={country.cca3}
                  onClick={() => handleCountrySelect(country)}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                    className="w-6 h-4 object-cover"
                  />
                  <span>{country.name.common}</span>
                </div>
              ))}
              {filteredCountries.length === 0 && (
                <div className="px-3 py-2 text-gray-500 text-sm">
                  No countries found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <input onChange={handleChange} name="state" type="text" placeholder="state ..." className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm"/>
    </div>
  );
};

export default StepFive;