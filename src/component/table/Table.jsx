// import { BiUser } from "react-icons/bi";

// const Table = ({ headers, data }) => {
//   const renderCell = (header, row, index) => {
//     switch (header.toLowerCase()) {
//       case "s/n":
//         return <span className="font-mono">{index + 1}</span>;
//       case "more":
//         return (
//           <button
//             onClick={() => alert(`Viewing row ${index + 1}`)}
//             className="px-3 py-1.5 bg-gray-800 text-white rounded-md text-sm font-medium
//               hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
//               transition-colors duration-200"
//           >
//             View
//           </button>
//         );
//       case "avatar":
//         return <BiUser />;
//       default:
//         return <span>{row[header]}</span>;
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full bg-white rounded-lg shadow-sm">
//         <thead className="bg-gray-800 text-white text-sm">
//           <tr>
//             {headers?.map((header, index) => (
//               <th
//                 key={index}
//                 className="px-6 py-3 text-left font-medium tracking-wide uppercase"
//               >
//                 {header}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody className="text-gray-700">
//           {data?.length > 0 ? (
//             data?.map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 className={`border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${
//                   rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
//                 }`}
//               >
//                 {headers?.map((header, colIndex) => (
//                   <td key={colIndex} className="px-6 py-4">
//                     {renderCell(header, row, rowIndex)}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={headers?.length}
//                 className="text-center py-6 text-gray-500 text-base font-medium"
//               >
//                 No call logs available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

// ----- version 2 --------
import { BiUser, BiDotsHorizontalRounded } from "react-icons/bi";
import { useState } from "react";

const Table = ({ headers, data }) => {
  const [hoveredRow, setHoveredRow] = useState(null);

  const renderCell = (header, row, index) => {
    switch (header.toLowerCase()) {
      case "s/n":
        return (
          <div className="font-mono flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
            {index + 1}
          </div>
        );
      case "more":
        return (
          <div className="flex items-center space-x-1">
            <button
              onClick={() => alert(`Viewing row ${index + 1}`)}
              className="px-3 py-1.5 bg-red-500 text-white rounded-md text-xs font-medium
                hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:ring-offset-1
                transition-colors duration-200"
            >
              View
            </button>
            <button className="p-1.5 bg-gray-100 text-gray-600 rounded-md hover:bg-gray-200 transition-colors duration-200">
              <BiDotsHorizontalRounded className="text-lg" />
            </button>
          </div>
        );
      case "avatar":
        return (
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
            <BiUser className="text-lg" />
          </div>
        );
      case "status":
        const status = row[header]?.toLowerCase();
        let statusColor = "gray";

        if (status === "active" || status === "completed")
          statusColor = "green";
        if (status === "pending") statusColor = "yellow";
        if (status === "failed" || status === "cancelled") statusColor = "red";

        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${statusColor}-100 text-${statusColor}-800`}
          >
            {row[header]}
          </span>
        );
      default:
        return <span className="text-sm">{row[header]}</span>;
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers?.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data?.length > 0 ? (
            data?.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`hover:bg-gray-50 transition-colors duration-150`}
                onMouseEnter={() => setHoveredRow(rowIndex)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                {headers?.map((header, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {renderCell(header, row, rowIndex)}
                    </div>
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers?.length} className="px-6 py-12 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <BiUser className="text-3xl text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-base font-medium">
                    No call logs available
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Call logs will appear here once you start making calls
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
