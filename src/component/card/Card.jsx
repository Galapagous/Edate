// const Card = ({ title, icon: Icon, color, value }) => {
//   // Get the appropriate background and text colors based on the color prop
//   const getBgColor = () => {
//     switch (color?.toLowerCase()) {
//       case "red":
//         return "bg-red-50";
//       case "blue":
//         return "bg-blue-50";
//       case "green":
//         return "bg-green-50";
//       case "purple":
//         return "bg-purple-50";
//       case "yellow":
//         return "bg-yellow-50";
//       default:
//         return "bg-gray-50";
//     }
//   };

//   const getTextColor = () => {
//     switch (color?.toLowerCase()) {
//       case "red":
//         return "text-red-500";
//       case "blue":
//         return "text-blue-500";
//       case "green":
//         return "text-green-500";
//       case "purple":
//         return "text-purple-500";
//       case "yellow":
//         return "text-yellow-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   return (
//     <div className="bg-white rounded-xl border border-gray-100 p-5 h-full transition-all duration-300 hover:shadow-md">
//       <div className="flex items-start justify-between">
//         <div>
//           <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
//           <p className="text-2xl font-bold text-gray-800">{value}</p>
//         </div>
//         <div className={`p-3 rounded-lg ${getBgColor()}`}>
//           {Icon && <Icon className={`text-xl ${getTextColor()}`} />}
//         </div>
//       </div>

//       <div className="mt-6 pt-3 border-t border-gray-50">
//         <p
//           className={`text-xs font-medium flex items-center ${getTextColor()}`}
//         >
//           <span className="mr-1 text-lg">↗</span>
//           24% increase from last week
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Card;

// ------ version 2 -------
import React from "react";

const Card = ({ title, icon: Icon, color, value }) => {
  // Function to get the appropriate background color based on the color prop
  const getBgColor = () => {
    switch (color?.toLowerCase()) {
      case "red":
        return "bg-red-100";
      case "blue":
        return "bg-blue-100";
      case "green":
        return "bg-green-100";
      case "purple":
        return "bg-purple-100";
      case "yellow":
        return "bg-yellow-100";
      default:
        return "bg-gray-100";
    }
  };

  // Function to get the appropriate text color based on the color prop
  const getTextColor = () => {
    switch (color?.toLowerCase()) {
      case "red":
        return "text-red-600";
      case "blue":
        return "text-blue-600";
      case "green":
        return "text-green-600";
      case "purple":
        return "text-purple-600";
      case "yellow":
        return "text-yellow-600";
      default:
        return "text-gray-600";
    }
  };

  // Function to get the appropriate border color based on the color prop
  const getBorderColor = () => {
    switch (color?.toLowerCase()) {
      case "red":
        return "border-red-200";
      case "blue":
        return "border-blue-200";
      case "green":
        return "border-green-200";
      case "purple":
        return "border-purple-200";
      case "yellow":
        return "border-yellow-200";
      default:
        return "border-gray-200";
    }
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className={`rounded-xl border p-5 h-full text-white transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-gray-100 text-sm font-medium mb-1">{title}</h3>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${getBgColor()}`}>
          {Icon && <Icon className={`text-xl ${getTextColor()}`} />}
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-gray-50">
        <p
          className={`text-xs font-medium flex text-gray-200 items-center ${getTextColor()}`}
        >
          <span className="mr-1 text-lg">↗</span>
          24% increase from last week
        </p>
      </div>
    </div>
  );
};

export default Card;
