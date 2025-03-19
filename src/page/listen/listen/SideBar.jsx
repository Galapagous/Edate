// import { useNavigate } from "react-router-dom";
// import { getSidebarMenu } from "./data";

// const SideBar = () => {
//   const sideData = getSidebarMenu("1234");
//   const navigate = useNavigate();
//   const handleNavigate = (link) => {
//     navigate(link);
//   };

//   return (
//     <div className="w-full flex flex-col items-start justify-center gap-3 h-full">
//       {sideData?.map((eachData) => {
//         return (
//           <button
//             onClick={() => {
//               handleNavigate(eachData?.link, eachData?.name);
//             }}
//             className={`flex items-center text-gray-600 justify-start p-2 gap-2 w-full hover:bg-red-400 hover:text-white`}
//             to={eachData?.link}
//             key={eachData?.name}
//           >
//             <eachData.icon className="text-sm" />
//             <p className="">{eachData?.name}</p>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default SideBar;

// ------- version 2 -------
import { useNavigate } from "react-router-dom";
import { getSidebarMenu } from "./data";

const SideBar = () => {
  const sideData = getSidebarMenu("1234");
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-1 h-full p-4">
      <div className="mb-6 w-full">
        <h2 className="text-xl font-bold text-gray-800 px-2">Dashboard</h2>
        <div className="h-1 w-12 bg-red-500 rounded mt-1 ml-2"></div>
      </div>

      {sideData?.map((eachData) => {
        return (
          <button
            onClick={() => {
              handleNavigate(eachData?.link, eachData?.name);
            }}
            className={`flex items-center justify-start p-3 gap-3 w-full rounded-lg transition-all duration-300
              hover:bg-red-100 hover:text-red-600 text-gray-600 group`}
            key={eachData?.name}
          >
            <div className="group-hover:bg-red-200 p-2 rounded-md transition-all duration-300">
              <eachData.icon className="text-lg group-hover:text-red-500" />
            </div>
            <p className="font-medium">{eachData?.name}</p>
          </button>
        );
      })}

      <div className="mt-auto w-full py-4">
        <div className="p-4 bg-gray-100 rounded-lg shadow-sm">
          <div className="h-2 w-12 bg-red-400 rounded mb-2"></div>
          <p className="text-xs text-gray-500">Need help?</p>
          <p className="text-sm font-medium">Contact Support</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
