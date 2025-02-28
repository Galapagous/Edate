import { useState, useEffect } from "react";
import { ImPhoneHangUp } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { getOnlineReciever } from "./data";

const Call = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [activeCalls, setActiveCalls] = useState([]);
  const [selectedCall, setSelectedCall] = useState(null);
  const [callStatus, setCallStatus] = useState("ready"); // ready, calling, connected
  const [currentCallId, setCurrentCallId] = useState(null);

  const handleCall = ()=>{
    alert('call selected')
  }

  const handleStartCall = ()=>{
    alert('call started')
  }

  const handleJoinCall = ()=>{
    alert('call started')
  }


  const handleSelection = ()=>{
    alert('selection made')
  }


  return (
    <div className="bg-backgound_primary w-full h-full relative p-2">
      <section className="m-5 relative bg-white p-4 h-[90%] rounded-lg shadow-md">
        <h1 className="mb-6 font-semibold text-xl text-gray-700">
          Call Center
        </h1>
        
        <div className="flex flex-col items-center justify-center h-[80%] gap-4">
          {/* Status Indicator */}
          <div className="text-lg font-medium mb-4">
            {callStatus === "connected" ? (
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"/>
                <span className="text-green-600">Call Connected</span>
              </div>
            ) : callStatus === "calling" ? (
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"/>
                <span className="text-yellow-600">Calling...</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-gray-300 rounded-full"/>
                <span className="text-gray-500">Ready to Call</span>
              </div>
            )}
          </div>

          {/* Call Button */}
          <button
            onClick={handleStartCall}
            className={`transition-all duration-300 p-6 rounded-full shadow-lg 
              ${isCalling 
                ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                : "bg-green-500 hover:bg-green-600"
              }`}
          >
            {isCalling ? (
              <ImPhoneHangUp className="w-8 h-8 text-white animate-bounce"/>
            ) : (
              <IoCall className="w-8 h-8 text-white"/>
            )}
          </button>

          {/* Active Calls Section */}
          <div className="w-full max-w-md mt-8">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Active Calls</h2>
            <div className="space-y-2">
              {activeCalls.map((call) => (
                <div 
                  key={call.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"/>
                    <span className="text-gray-700">Call ID: {call.id.substr(0, 8)}...</span>
                    <span className="text-sm text-gray-500">
                      {call.participants} participant(s)
                    </span>
                  </div>
                  {!isCalling && (
                    <button
                      onClick={() => handleJoinCall(call.id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Join Call
                    </button>
                  )}
                </div>
              ))}
              {activeCalls.length === 0 && (
                <p className="text-center text-gray-500 py-4">
                  No active calls available
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Online Listeners Section */}
        <div className="absolute bottom-1 right-1 p-[1rem]">
          <h1 className="mb-2 font-thin text-[1rem]">Online listeners</h1>
          {getOnlineReciever().map((receiver) => (
            <button 
              key={receiver.fullName}
              onClick={() => handleSelection(receiver)}
              className="flex items-center justify-start w-full gap-2 cursor-pointer p-2 hover:bg-blue-500 hover:text-white px-3"
            >
              {receiver.avatar}
              <h1>{receiver.fullName}</h1>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Call;