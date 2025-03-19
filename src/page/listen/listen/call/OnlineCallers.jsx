// import { BiFemale, BiMale, BiPhone } from "react-icons/bi";
// import { getOnlineCaller } from "./data";
// import { useEffect, useState } from "react";

// const OnlineCallers = ({ handleCall }) => {
//   const [positions, setPositions] = useState([]);
//   const callers = getOnlineCaller();

//   const generatePositions = () => {
//     const gridSize = Math.ceil(Math.sqrt(callers.length));
//     const spacing = 100 / (gridSize + 1);
//     const newPositions = callers.map((_, index) => {
//       const row = Math.floor(index / gridSize);
//       const col = index % gridSize;
//       const top =
//         (row + 1) * spacing + (Math.random() * spacing * 0.4 - spacing * 0.2);
//       const left =
//         (col + 1) * spacing + (Math.random() * spacing * 0.4 - spacing * 0.2);
//       return {
//         top: `${Math.min(Math.max(top, 10), 90)}%`, // Tighter bounds for better edge spacing
//         left: `${Math.min(Math.max(left, 10), 90)}%`,
//       };
//     });
//     setPositions(newPositions);
//   };

//   useEffect(() => {
//     generatePositions();
//   }, [callers.length]);

//   const handleSelection = (caller) => {
//     handleCall(caller);
//   };

//   return (
//     <div className="relative min-h-[500px] w-full shadow-sm">
//       {/* Header */}
//       <div className="p-6">
//         <h1 className="text-xl mb-10 font-medium text-gray-900 tracking-wide">
//           Online Callers ({callers.length})
//         </h1>
//         {callers?.map((eachCaller, index) => {
//           return (
//             <div
//               key={index}
//               className="w-full flex items-center justify-between p-3 hover:bg-gray-200"
//             >
//               <div className="flex items-center justify-start">
//                 {eachCaller?.gender === "male" ? <BiMale /> : <BiFemale />}
//                 <span className="ml-2 text-sm text-gray-500">
//                   {eachCaller?.fullName}
//                 </span>
//                 {eachCaller?.gender === "male" ? (
//                   <p className="text-xs text-red-500 ml-3 p-2 rounded-full bg-red-50">
//                     M
//                   </p>
//                 ) : (
//                   <p className="text-xs text-blue-500 ml-3 p-2 rounded-full bg-blue-50">
//                     F
//                   </p>
//                 )}
//               </div>
//               <button
//                 onClick={() => handleSelection(eachCaller)}
//                 className="ml-2 px-4 py-1 text-sm text-gray-900 rounded-md hover:bg-gray-700 transition-colors duration-200"
//               >
//                 <BiPhone className="text-green-500" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default OnlineCallers;

// ------- version 2 ---------
import { BiFemale, BiMale, BiPhone, BiRefresh } from "react-icons/bi";
import { getOnlineCaller } from "./data";
import { useEffect, useState } from "react";

const OnlineCallers = ({ handleCall }) => {
  const [positions, setPositions] = useState([]);
  const [view, setView] = useState("list"); // "list" or "grid"
  const [callers, setCallers] = useState([]);

  useEffect(() => {
    const fetchedCallers = getOnlineCaller();
    setCallers(fetchedCallers);
  }, []);

  const generatePositions = () => {
    const gridSize = Math.ceil(Math.sqrt(callers.length));
    const spacing = 100 / (gridSize + 1);
    const newPositions = callers.map((_, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      const top =
        (row + 1) * spacing + (Math.random() * spacing * 0.4 - spacing * 0.2);
      const left =
        (col + 1) * spacing + (Math.random() * spacing * 0.4 - spacing * 0.2);
      return {
        top: `${Math.min(Math.max(top, 10), 90)}%`,
        left: `${Math.min(Math.max(left, 10), 90)}%`,
      };
    });
    setPositions(newPositions);
  };

  useEffect(() => {
    if (callers.length) {
      generatePositions();
    }
  }, [callers.length]);

  const handleSelection = (caller) => {
    handleCall(caller);
  };

  const regeneratePositions = () => {
    generatePositions();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">
          Online Callers{" "}
          <span className="ml-2 bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-sm">
            {callers.length}
          </span>
        </h1>
        <div className="flex space-x-2">
          <button
            onClick={() => setView("list")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
              view === "list"
                ? "bg-white text-purple-600"
                : "bg-transparent text-white border border-white"
            }`}
          >
            List
          </button>
          <button
            onClick={() => setView("grid")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
              view === "grid"
                ? "bg-white text-purple-600"
                : "bg-transparent text-white border border-white"
            }`}
          >
            Grid
          </button>
        </div>
      </div>

      {view === "list" ? (
        <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
          {callers?.map((eachCaller, index) => {
            const isMale = eachCaller?.gender === "male";
            return (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isMale ? "bg-blue-100" : "bg-pink-100"
                    }`}
                  >
                    {isMale ? (
                      <BiMale className="text-blue-600 text-xl" />
                    ) : (
                      <BiFemale className="text-pink-600 text-xl" />
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-800">
                      {eachCaller?.fullName}
                    </h3>
                    <p className="text-xs text-gray-500">Online now</p>
                  </div>
                  <span
                    className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                      isMale
                        ? "bg-blue-100 text-blue-700"
                        : "bg-pink-100 text-pink-700"
                    }`}
                  >
                    {isMale ? "Male" : "Female"}
                  </span>
                </div>
                <button
                  onClick={() => handleSelection(eachCaller)}
                  className="ml-2 p-3 rounded-full bg-green-100 hover:bg-green-600 text-green-600 hover:text-white transition-all duration-200"
                  aria-label="Call"
                >
                  <BiPhone className="text-lg" />
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="relative min-h-[500px] w-full p-4">
          <button
            onClick={regeneratePositions}
            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
            aria-label="Refresh layout"
          >
            <BiRefresh />
          </button>

          {callers?.map((eachCaller, index) => {
            const isMale = eachCaller?.gender === "male";
            const position = positions[index] || { top: "50%", left: "50%" };

            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
                style={{ top: position.top, left: position.left }}
              >
                <div
                  className={`w-16 h-16 rounded-full ${
                    isMale ? "bg-blue-100" : "bg-pink-100"
                  } flex flex-col items-center justify-center group relative cursor-pointer`}
                >
                  <div className="group-hover:scale-0 transition-transform duration-200 absolute inset-0 flex items-center justify-center">
                    {isMale ? (
                      <BiMale className="text-blue-600 text-2xl" />
                    ) : (
                      <BiFemale className="text-pink-600 text-2xl" />
                    )}
                  </div>
                  <button
                    onClick={() => handleSelection(eachCaller)}
                    className="scale-0 group-hover:scale-100 transition-transform duration-200 absolute inset-0 bg-green-500 rounded-full flex items-center justify-center"
                  >
                    <BiPhone className="text-white text-2xl" />
                  </button>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium whitespace-nowrap">
                    {eachCaller?.fullName.split(" ")[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default OnlineCallers;
