import { getOnlineCaller } from "./data";
import { useEffect, useState } from "react";

const OnlineCallers = ({handleCall}) => {
  const [positions, setPositions] = useState([]);
  const callers = getOnlineCaller();

  const generatePositions = () => {
    const gridSize = Math.ceil(Math.sqrt(callers.length)); // Create a rough square grid
    const spacing = 100 / (gridSize + 1); // Base spacing percentage
    const newPositions = callers.map((_, index) => {
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      // Base position + random offset
      const top = (row + 1) * spacing + (Math.random() * spacing * 0.5 - spacing * 0.25);
      const left = (col + 1) * spacing + (Math.random() * spacing * 0.5 - spacing * 0.25);
      return {
        top: `${Math.min(Math.max(top, 15), 85)}%`, // Keep within 15-85% bounds
        left: `${Math.min(Math.max(left, 15), 85)}%`,
      };
    });
    setPositions(newPositions);
  };

  useEffect(() => {
    generatePositions();
  }, [callers.length]);

  const handleSelection = (caller) => {
    alert(`Selected: ${caller.fullName}`);
  };

  return (
    <div className="relative min-h-[400px] w-full bg-gradient-to-br from-gray-50 to-blue-100 overflow-hidden">
      <h1 className="absolute top-4 left-4 text-xl font-light text-gray-800 z-10">
        Online Listeners
      </h1>
      
      <button
        onClick={generatePositions}
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md
          hover:bg-blue-600 transition-colors duration-200 z-10"
      >
        Reshuffle
      </button>

      {callers.map((caller, index) => (
        <button
          key={caller?.fullName}
          onClick={()=>{handleCall()}}
          className="absolute transform -translate-x-1/2 -translate-y-1/2
            bg-white rounded-lg shadow-md p-4 w-64
            hover:shadow-lg hover:bg-blue-50 
            transition-all duration-200 ease-in-out
            flex items-center gap-3
            border border-gray-200
            hover:scale-105"
          style={{
            top: positions[index]?.top,
            left: positions[index]?.left,
          }}
        >
          <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden flex items-center justify-center">
            {caller?.avatar}
          </div>
          <div className="text-left">
            <h2 className="font-medium text-gray-800">{caller?.fullName}</h2>
            <p className="text-sm text-gray-500">Click to connect</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default OnlineCallers;