import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Overview from "./overview/Overview";
import Calls from "./call/Calls";
import Message from "./messages/Message";
import Wallet from "./wallet/Wallet";
import Settings from "./settings/Sessions";
import Modal from "../../../component/modals";
import { useSelector } from "react-redux";

const Listen = () => {
  const user = useSelector((state) => state.user.currentUser);
  const [activeSelection, setActiveSelection] = useState("Overview");
  const [viewModal, setViewModal] = useState(false);
  const selctions = ["Overview", "Call", "Messages", "Wallet", "Settings"];
  const handleSelection = (selectedSection) => {
    setActiveSelection(selectedSection);
  };

  useEffect(() => {
    if (!user?.companionProfile) {
      setViewModal(true);
    }
  }, []);

  const handleCompete = () => {
    setActiveSelection("Settings");
    setViewModal(false);
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="flex items-start justify-start gap-2 p-2 w-full h-full">
        <div className="sm:w-[20%] w-[40%] h-full">
          <SideBar />
        </div>
        <div className="h-full sm:w-[80%] w-[60%] rounded-md">
          <div className="w-full py-2">
            <div className="w-1/2 mx-auto flex items-center justify-center gap-5 text-gray-500 cursor-pointer">
              {selctions.map((eachSelection, index) => {
                return (
                  <button
                    key={index}
                    className={`w-[100%] h-[2rem] px-3 text-sm text-gray-700 ${
                      activeSelection === eachSelection
                        ? "border-b-2 border-red-500"
                        : ""
                    } transition-all duration-300`}
                    onClick={() => {
                      handleSelection(eachSelection);
                    }}
                  >
                    {eachSelection}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="py-3">
            {activeSelection === "Overview" ? <Overview /> : null}
            {activeSelection === "Call" ? <Calls /> : null}
            {activeSelection === "Messages" ? <Message /> : null}
            {activeSelection === "Wallet" ? <Wallet /> : null}
            {activeSelection === "Settings" ? <Settings /> : null}
          </div>
        </div>
      </div>
      <Modal showModal={viewModal} setShowModal={setViewModal}>
        <div className=" flex items-center justify-center">
          <div className="w-3/4 h-auto p-6 text-center bg-white rounded-md">
            <h2 className="text-2xl font-bold">
              Please complete your profile to access this feature
            </h2>
            <button
              className="mt-4 w-20 h-8 bg-red-500 text-white rounded-md hover:bg-red-700 transition-all duration-300"
              onClick={handleCompete}
            >
              Complete Profile
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Listen;
