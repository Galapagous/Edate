// import { useEffect, useState } from "react";
// import { LuShipWheel } from "react-icons/lu";
// import { getUserLocation } from "../../utils/getUserLocatio";


// const StepSeven = () => {
//   const [currentLocation, setCurrentLocation] = useState(null)
//   useEffect(() => {
//     const getLocation = async () => {
//       const locationData = await getUserLocation();
//       console.log('location -->',locationData)
//       setCurrentLocation(locationData);
//     };
//     getLocation();
//   }, []);

//   const renderLocation = ()=>{
//     return(
//       <div>
//         <p className="text-neut_200"><span className="text-black">Continent:</span> {currentLocation?.continent_code}</p>
//         <p className="text-neut_200"><span className="text-black">Country:</span> {currentLocation?.country}</p>
//         <p className="text-neut_200"><span className="text-black">City:</span> {currentLocation?.city}</p>
//         <p className="text-neut_200"><span className="text-black">Timezone:</span> {currentLocation?.timezone}</p>
//         <p className="text-neut_200"><span className="text-black">Logitude:</span> {currentLocation?.logitude}</p>
//         <p className="text-neut_200"><span className="text-black">Latitude:</span> {currentLocation?.latitude}</p>
//       </div>
//     )
//   }

//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">
//         Let locate you
//       </h1>
//       <button className="w-full flex items-center justify-between bg-main_200 text-white rounded-md px-4 py-2 relative" >
//         <span>Locate Me</span>
//         <LuShipWheel/>
//       </button>
//       {currentLocation ? renderLocation(): null}

//     </div>
//   )
// }

// export default StepSeven

// ----- version 2 ------
import { useEffect, useState } from "react";
import { LuShipWheel } from "react-icons/lu";
import { getUserLocation } from "../../utils/getUserLocatio"; // Assuming typo fix: getUserLocation

const StepSeven = ({ handleChange }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchLocation = async () => {
    setLoading(true);
    try {
      const locationData = await getUserLocation();
      console.log("location -->", locationData);
      setCurrentLocation(locationData);
      // Pass location as an object to handleChange
      const event = {
        target: {
          name: "location",
          value: locationData || {},
        },
      };
      handleChange(event);
    } catch (error) {
      console.error("Error fetching location:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Optionally fetch on mount - comment out if only button should trigger
    fetchLocation();
  }, []);

  const renderLocation = () => {
    if (!currentLocation) return null;
    return (
      <div className="w-full p-4 bg-gray-100 rounded-lg shadow-sm flex flex-col gap-2 text-sm text-gray-900">
        <p>
          <span className="font-medium">Continent:</span> {currentLocation.continent_code || "N/A"}
        </p>
        <p>
          <span className="font-medium">Country:</span> {currentLocation.country || "N/A"}
        </p>
        <p>
          <span className="font-medium">City:</span> {currentLocation.city || "N/A"}
        </p>
        <p>
          <span className="font-medium">Timezone:</span> {currentLocation.timezone || "N/A"}
        </p>
        <p>
          <span className="font-medium">Longitude:</span> {currentLocation.longitude || "N/A"}
        </p>
        <p>
          <span className="font-medium">Latitude:</span> {currentLocation.latitude || "N/A"}
        </p>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <h1 className="font-medium text-xl">Let’s locate you</h1>
      <button
        onClick={fetchLocation}
        disabled={loading}
        className="w-full flex items-center justify-between px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-indigo-700 hover:shadow-md transition-shadow duration-200 disabled:opacity-50"
      >
        <span>{loading ? "Locating..." : "Locate Me"}</span>
        <LuShipWheel className="w-5 h-5" />
      </button>
      {currentLocation && renderLocation()}
    </div>
  );
};

export default StepSeven;