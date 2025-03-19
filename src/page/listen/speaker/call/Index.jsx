// import { useState, useEffect } from "react";
// import { ImPhoneHangUp } from "react-icons/im";
// import { IoCall } from "react-icons/io5";
// import { getOnlineReciever } from "./data";

// const Call = () => {
//   const [isCalling, setIsCalling] = useState(false);
//   const [activeCalls, setActiveCalls] = useState([]);
//   const [selectedReceiver, setSelectedReceiver] = useState(null);
//   const [callStatus, setCallStatus] = useState("ready");
//   const [currentCallId, setCurrentCallId] = useState(null);
//   const [callDuration, setCallDuration] = useState(0);
//   const [timerId, setTimerId] = useState(null);

//   // Format time in MM:SS
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // Start call timer
//   const startTimer = () => {
//     const id = setInterval(() => {
//       setCallDuration((prev) => prev + 1);
//     }, 1000);
//     setTimerId(id);
//   };

//   // Stop call timer
//   const stopTimer = () => {
//     if (timerId) {
//       clearInterval(timerId);
//       setTimerId(null);
//     }
//   };

//   const handleStartCall = () => {
//     if (!isCalling && selectedReceiver) {
//       setIsCalling(true);
//       setCallStatus("calling");

//       // Simulate call ringing (2 seconds delay before connecting)
//       setTimeout(() => {
//         const newCallId = `call_${Date.now()}`;
//         setCurrentCallId(newCallId);
//         setCallStatus("connected");
//         setActiveCalls((prev) => [
//           ...prev,
//           {
//             id: newCallId,
//             participants: 2,
//             receiver: selectedReceiver.fullName,
//           },
//         ]);
//         startTimer();
//       }, 2000);
//     } else if (isCalling) {
//       // End call
//       setIsCalling(false);
//       setCallStatus("ready");
//       setCurrentCallId(null);
//       stopTimer();
//       setCallDuration(0);
//     }
//   };

//   const handleJoinCall = (callId) => {
//     setIsCalling(true);
//     setCurrentCallId(callId);
//     setCallStatus("connected");
//     startTimer();
//   };

//   const handleSelection = (receiver) => {
//     setSelectedReceiver(receiver);
//   };

//   // Cleanup timer on component unmount
//   useEffect(() => {
//     return () => stopTimer();
//   }, []);

//   return (
//     <div className="bg-background_primary w-full h-full relative p-2">
//       <section className="m-5 relative bg-white p-4 h-[400px] rounded-lg shadow-md">
//         <h1 className="mb-6 font-semibold text-xl text-gray-700">
//           Call Center
//         </h1>

//         <div className="flex flex-col items-center justify-center h-[80%] gap-4">
//           {/* Status Indicator */}
//           <div className="text-lg font-medium mb-4">
//             {callStatus === "connected" ? (
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                 <span className="text-green-600">
//                   Call Connected ({formatTime(callDuration)})
//                 </span>
//               </div>
//             ) : callStatus === "calling" ? (
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
//                 <span className="text-yellow-600">Calling...</span>
//               </div>
//             ) : (
//               <div className="flex items-center gap-2">
//                 <span className="w-3 h-3 bg-gray-300 rounded-full" />
//                 <span className="text-gray-500">Ready to Call</span>
//               </div>
//             )}
//           </div>

//           {/* Call Button */}
//           <button
//             onClick={handleStartCall}
//             disabled={!selectedReceiver && !isCalling}
//             className={`transition-all duration-300 p-6 rounded-full shadow-lg
//               ${
//                 isCalling
//                   ? "bg-red-500 hover:bg-red-600 animate-pulse"
//                   : "bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
//               }`}
//           >
//             {isCalling ? (
//               <ImPhoneHangUp className="w-8 h-8 text-white animate-bounce" />
//             ) : (
//               <IoCall className="w-8 h-8 text-white" />
//             )}
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Call;

// ------ version 2 ---------
import { useState, useEffect } from "react";
import { ImPhoneHangUp } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { getOnlineReciever } from "./data"; // Assuming this returns online receivers

const Call = () => {
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState("ready"); // "ready", "ringing", "connected"
  const [currentReceiver, setCurrentReceiver] = useState(null); // Receiver who picks up
  const [callDuration, setCallDuration] = useState(0);
  const [timerId, setTimerId] = useState(null);

  // Format time in MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Start call timer
  const startTimer = () => {
    const id = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    setTimerId(id);
  };

  // Stop and reset call timer
  const stopTimer = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
      setCallDuration(0);
    }
  };

  const handleCallAction = () => {
    if (!isCalling) {
      // Start the call process
      setIsCalling(true);
      setCallStatus("ringing");

      // Simulate an online receiver picking up after a delay (e.g., 2-5 seconds)
      const onlineReceivers = getOnlineReciever();
      if (onlineReceivers.length > 0) {
        const randomDelay = Math.floor(Math.random() * 3000) + 2000; // 2-5 seconds
        setTimeout(() => {
          const receiver =
            onlineReceivers[Math.floor(Math.random() * onlineReceivers.length)];
          setCurrentReceiver(receiver);
          setCallStatus("connected");
          startTimer();
        }, randomDelay);
      } else {
        // No receivers available, end the call attempt after a timeout
        setTimeout(() => {
          if (callStatus === "ringing") {
            setIsCalling(false);
            setCallStatus("ready");
            alert("No one picked up the call.");
          }
        }, 5000); // 5-second timeout
      }
    } else {
      // End the call
      setIsCalling(false);
      setCallStatus("ready");
      setCurrentReceiver(null);
      stopTimer();
    }
  };

  // Cleanup timer on component unmount
  useEffect(() => {
    return () => stopTimer();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full flex items-center justify-center p-4">
      <section className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Call Center
        </h1>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Status Indicator */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full animate-pulse ${
                  callStatus === "connected"
                    ? "bg-green-500"
                    : callStatus === "ringing"
                    ? "bg-yellow-500"
                    : "bg-gray-300"
                }`}
              />
              <span
                className={`text-lg font-medium ${
                  callStatus === "connected"
                    ? "text-green-600"
                    : callStatus === "ringing"
                    ? "text-yellow-600"
                    : "text-gray-500"
                }`}
              >
                {callStatus === "connected"
                  ? "Connected"
                  : callStatus === "ringing"
                  ? "Ringing..."
                  : "Ready to Call"}
              </span>
            </div>

            {/* Call Info */}
            {callStatus !== "ready" && (
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {callStatus === "ringing"
                    ? "Waiting for someone to pick up..."
                    : `Speaking with ${currentReceiver?.fullName || "Unknown"}`}
                </p>
                {callStatus === "connected" && (
                  <p className="text-xl font-mono text-gray-700 mt-1">
                    {formatTime(callDuration)}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Call Button */}
          <button
            onClick={handleCallAction}
            className={`p-6 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isCalling
                ? "bg-red-500 hover:bg-red-600 focus:ring-red-300 animate-pulse"
                : "bg-green-500 hover:bg-green-600 focus:ring-green-300"
            }`}
          >
            {isCalling ? (
              <ImPhoneHangUp className="w-8 h-8 text-white animate-bounce" />
            ) : (
              <IoCall className="w-8 h-8 text-white" />
            )}
          </button>

          {/* Online Receivers Count */}
          <p className="text-sm text-gray-500 mt-4">
            Online Receivers: {getOnlineReciever().length}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Call;
