// import { useState } from "react"

// const StepEight = () => {
//   const [selectedColor, setSelectedColor] = useState(null)
//   const skinColor = ['#844F00', '#A6752C', '#D7A354', '#EEBF7A', '#FFD495', '#674106', '#412E10']
  
//   const handleSkin = (selectedSkin)=>{
//     alert(selectedSkin)
//     setSelectedColor(selectedSkin)
//   }


//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">
//         A Little Toppings
//       </h1>
//       <div className="w-full mt-3">
//         <p>My skin color is: </p>
//         <div className={`w-full h-10 border-2 rounded-md ${selectedColor ? `bg-[${selectedColor}]` : 'bg-main_200'}`}></div>
//         <div className="flex items-center justify-center gap-3">
//           {
//             skinColor?.map((eachColor)=>{return(
//               <div onClick={()=>{handleSkin(eachColor)}} style={{ backgroundColor: eachColor }} key={eachColor} className={`w-5 h-5 bg-['${eachColor}'] border-2 cursor-pointer rounded-full`}></div>
//             )})
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StepEight

// --------- version 2 -------
// import { useState } from "react"

// const StepEight = (handleChange) => {
//   const [selectedSkinColor, setSelectedSkinColor] = useState(null)
//   const [selectedEyeColor, setSelectedEyeColor] = useState(null)
  
//   const skinColor = ['#844F00', '#A6752C', '#D7A354', '#EEBF7A', '#FFD495', '#674106', '#412E10']
//   const eyeColor = ['#4E6E58', '#2C5F2D', '#1E3A23', '#6E4C1E', '#3C1E1E', '#4A2C2A', '#000000']
  
//   const handleSkinSelect = (selectedSkin) => {
//     setSelectedSkinColor(selectedSkin)
//   }

//   const handleEyeSelect = (selectedEye) => {
//     setSelectedEyeColor(selectedEye)
//   }

//   return (
//     <div className="flex flex-col items-start justify-start gap-2 w-full">
//       <h1 className="font-semibold text-2xl">
//         A Little Toppings
//       </h1>
      
//       {/* Skin Color Section */}
//       <div className="w-full mt-3">
//         <p>My skin color is: </p>
//         <div 
//           className="w-full h-10 border-2 rounded-md" 
//           style={{ 
//             backgroundColor: selectedSkinColor || '#808080',
//             transition: 'background-color 0.3s ease'
//           }}
//         ></div>
//         <div className="flex items-center justify-center gap-3 mt-2">
//           {skinColor.map((color) => (
//             <div 
//               key={color} 
//               onClick={() => handleSkinSelect(color)}
//               className={`w-6 h-6 border-2 cursor-pointer rounded-full transition-all duration-300 
//                 ${selectedSkinColor === color ? 'ring-2 ring-blue-500 scale-110' : 'hover:scale-110'}
//               `}
//               style={{ 
//                 backgroundColor: color,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Eye Color Section */}
//       <div className="w-full mt-3">
//         <p>My eye color is: </p>
//         <div 
//           className="w-full h-10 border-2 rounded-md" 
//           style={{ 
//             backgroundColor: selectedEyeColor || '#808080',
//             transition: 'background-color 0.3s ease'
//           }}
//         ></div>
//         <div className="flex items-center justify-center gap-3 mt-2">
//           {eyeColor.map((color) => (
//             <div 
//               key={color} 
//               onClick={() => handleEyeSelect(color)}
//               className={`w-6 h-6 border-2 cursor-pointer rounded-full transition-all duration-300 
//                 ${selectedEyeColor === color ? 'ring-2 ring-blue-500 scale-110' : 'hover:scale-110'}
//               `}
//               style={{ 
//                 backgroundColor: color,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StepEight

// ------ version 2 --------
import { useState } from "react";

const StepEight = ({ handleChange }) => {
  const [selectedSkinColor, setSelectedSkinColor] = useState(null);
  const [selectedEyeColor, setSelectedEyeColor] = useState(null);

  const skinColor = ["#844F00", "#A6752C", "#D7A354", "#EEBF7A", "#FFD495", "#674106", "#412E10"];
  const eyeColor = ["#4E6E58", "#2C5F2D", "#1E3A23", "#6E4C1E", "#3C1E1E", "#4A2C2A", "#000000"];

  const handleSkinSelect = (e) => {
    const value = e.target.value;
    setSelectedSkinColor(value);
    handleChange(e); // Pass event to parent
  };

  const handleEyeSelect = (e) => {
    const value = e.target.value;
    setSelectedEyeColor(value);
    handleChange(e); // Pass event to parent
  };

  return (
    <div className="flex flex-col items-start justify-start gap-4 w-full">
      <h1 className="font-medium text-xl">A Little Toppings</h1>

      {/* Skin Color Section */}
      <fieldset className="w-full">
        <legend className="text-sm text-gray-600 mb-2">My skin color is:</legend>
        <div
          className="w-full h-10 rounded-md border border-gray-300 shadow-sm mb-3"
          style={{
            backgroundColor: selectedSkinColor || "#808080",
            transition: "background-color 0.3s ease",
          }}
        ></div>
        <div className="flex flex-wrap items-center gap-3">
          {skinColor.map((color) => (
            <label
              key={color}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="skinColor"
                value={color}
                checked={selectedSkinColor === color}
                onChange={handleSkinSelect}
                className="hidden"
              />
              <span
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedSkinColor === color
                    ? "border-indigo-500 ring-2 ring-indigo-500"
                    : "border-gray-300 group-hover:border-indigo-400"
                }`}
                style={{ backgroundColor: color }}
              ></span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Eye Color Section */}
      <fieldset className="w-full">
        <legend className="text-sm text-gray-600 mb-2">My eye color is:</legend>
        <div
          className="w-full h-10 rounded-md border border-gray-300 shadow-sm mb-3"
          style={{
            backgroundColor: selectedEyeColor || "#808080",
            transition: "background-color 0.3s ease",
          }}
        ></div>
        <div className="flex flex-wrap items-center gap-3">
          {eyeColor.map((color) => (
            <label
              key={color}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <input
                type="radio"
                name="eyeColor"
                value={color}
                checked={selectedEyeColor === color}
                onChange={handleEyeSelect}
                className="hidden"
              />
              <span
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                  selectedEyeColor === color
                    ? "border-indigo-500 ring-2 ring-indigo-500"
                    : "border-gray-300 group-hover:border-indigo-400"
                }`}
                style={{ backgroundColor: color }}
              ></span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default StepEight;