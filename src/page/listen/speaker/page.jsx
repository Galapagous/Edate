// import { useEffect, useState } from "react";
// import SideBar from "../listen/SideBar";
// import Overview from "./overview/Index";
// import Call from "./call";
// import Message from "./message/Index";
// import Wallet from "./wallet/Index";
// import Settings from "./settings/Index";
// import { useSelector } from "react-redux";
// import Modal from "../../../component/modals";
// import { useNavigate } from "react-router-dom";

// const Speak = () => {
//   const user = useSelector((state) => state.user.currentUser);
//   const [activeSelection, setActiveSelection] = useState("Overview");
//   const selctions = ["Overview", "Call", "Messages", "Wallet", "Settings"];
//   const [viewModal, setViewModal] = useState(false);
//   const navigate = useNavigate();

//   const handleSelection = (selectedSection) => {
//     setActiveSelection(selectedSection);
//   };

//   const handleComplete = () => {
//     setActiveSelection("Settings");
//     setViewModal(false);
//   };

//   useEffect(() => {
//     if (!user?.companionProfile) {
//       setViewModal(true);
//     }
//   }, []);

//   return (
//     <div className="w-screen h-screen overflow-x-hidden">
//       <div className="flex items-start justify-start gap-2 p-2 w-full h-full">
//         <div className="sm:w-[20%] w-[40%] h-full">
//           <SideBar />
//         </div>
//         <div className="h-full sm:w-[80%] w-[60%] rounded-md">
//           <div className="w-full py-2">
//             <div className="w-1/2 mx-auto flex items-center justify-center gap-5 text-gray-500 cursor-pointer">
//               {selctions.map((eachSelection, index) => {
//                 return (
//                   <button
//                     key={index}
//                     className={`w-[100%] h-[2rem] px-3 text-sm text-gray-700 ${
//                       activeSelection === eachSelection
//                         ? "border-b-2 border-red-500"
//                         : ""
//                     } transition-all duration-300`}
//                     onClick={() => {
//                       handleSelection(eachSelection);
//                     }}
//                   >
//                     {eachSelection}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="py-3">
//             {activeSelection === "Overview" ? <Overview /> : null}
//             {activeSelection === "Call" ? <Call /> : null}
//             {activeSelection === "Messages" ? <Message /> : null}
//             {activeSelection === "Wallet" ? <Wallet /> : null}
//             {activeSelection === "Settings" ? <Settings /> : null}
//           </div>
//         </div>
//       </div>
//       <Modal showModal={viewModal} setShowModal={setViewModal}>
//         <div className="flex items-center justify-center">
//           <div className="p-5 text-center">
//             <h1 className="text-3xl font-bold">Welcome!</h1>
//             <p>
//               You haven't set up your companion profile yet. To get started,
//               please go to the "Companion" tab and complete your profile.
//             </p>
//             <button
//               onClick={handleComplete}
//               className="mt-4 w-20 h-8 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all duration-500"
//             >
//               Complete
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default Speak;

// ----- version 2 -------
import { useEffect, useState } from "react";
import SideBar from "../listen/SideBar";
import Overview from "./overview/Index";
import Call from "./call";
import Message from "./message/Index";
import Wallet from "./wallet/Index";
import Settings from "./settings/Index";
import { useSelector } from "react-redux";
import Modal from "../../../component/modals";
import { useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaPhone,
  FaEnvelope,
  FaWallet,
  FaCog,
} from "react-icons/fa";

const Speak = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [activeSelection, setActiveSelection] = useState("Overview");
  const selections = [
    { name: "Overview", icon: FaChartPie },
    { name: "Call", icon: FaPhone },
    { name: "Messages", icon: FaEnvelope },
    { name: "Wallet", icon: FaWallet },
    { name: "Settings", icon: FaCog },
  ];
  const [viewModal, setViewModal] = useState(false);
  const navigate = useNavigate();

  const handleSelection = (selectedSection) => {
    setActiveSelection(selectedSection);
  };

  const handleComplete = () => {
    setActiveSelection("Settings");
    setViewModal(false);
  };

  useEffect(() => {
    if (!user?.companionProfile) {
      setViewModal(true);
    }
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden bg-gray-50">
      <div className="flex items-start justify-start gap-4 p-4 w-full h-full">
        <div className="sm:w-[20%] w-[40%] h-full bg-white rounded-lg shadow-sm">
          <SideBar />
        </div>
        <div className="h-full sm:w-[80%] w-[60%] bg-white rounded-lg shadow-sm p-4">
          <div className="w-full mb-6">
            <div className="w-full md:w-3/4 lg:w-2/3 mx-auto flex items-center justify-between bg-gray-100 rounded-full p-1">
              {selections.map((item, index) => {
                const isActive = activeSelection === item.name;
                return (
                  <button
                    key={index}
                    className={`flex items-center justify-center gap-2 py-2 px-3 md:px-4 rounded-full text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-white text-red-500 shadow-sm font-medium"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                    onClick={() => {
                      handleSelection(item.name);
                    }}
                  >
                    <item.icon
                      className={`${
                        isActive ? "text-red-500" : "text-gray-500"
                      }`}
                    />
                    <span className="hidden md:inline">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="py-3 px-2">
            {activeSelection === "Overview" ? <Overview /> : null}
            {activeSelection === "Call" ? <Call /> : null}
            {activeSelection === "Messages" ? <Message /> : null}
            {activeSelection === "Wallet" ? <Wallet /> : null}
            {activeSelection === "Settings" ? <Settings /> : null}
          </div>
        </div>
      </div>
      <Modal showModal={viewModal} setShowModal={setViewModal}>
        <div className="flex items-center justify-center">
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCog className="text-red-500 text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h1>
            <p className="text-gray-600 mb-6">
              You haven't set up your companion profile yet. To get started,
              please go to the "Companion" tab and complete your profile.
            </p>
            <button
              onClick={handleComplete}
              className="px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 shadow-sm font-medium"
            >
              Complete Setup
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Speak;
