// import { ImPhoneHangUp } from "react-icons/im";
// import { IoCall } from "react-icons/io5";
// import { useState, useEffect } from "react";

// const Reciever = ({ handleCall, isRecieving, isCalling }) => {
//   const [callDuration, setCallDuration] = useState(0); // Timer in seconds

//   // Format seconds into MM:SS
//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${secs
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // Start/stop the timer based on isRecieving
//   useEffect(() => {
//     let timer;
//     if (isRecieving) {
//       // Start the timer when receiving a call
//       timer = setInterval(() => {
//         setCallDuration((prev) => prev + 1);
//       }, 1000); // Update every second
//     }
//     // Cleanup: stop the timer and reset duration when call ends
//     return () => {
//       clearInterval(timer);
//       if (!isRecieving) {
//         setCallDuration(0); // Reset timer when call ends
//       }
//     };
//   }, [isRecieving]); // Dependency on isRecieving

//   return (
//     <div className="flex flex-col items-center justify-center h-[350px] gap-4">
//       <div className="text-lg font-medium mb-4"></div>

//       {/* Call Button */}
//       <button
//         onClick={handleCall}
//         className={`transition-all duration-300 p-6 rounded-full shadow-lg
//               ${
//                 isRecieving
//                   ? "bg-red-500 hover:bg-red-600 animate-pulse"
//                   : "bg-green-500 hover:bg-green-600"
//               }`}
//       >
//         {isRecieving ? (
//           <ImPhoneHangUp className="w-8 h-8 text-white animate-bounce" />
//         ) : (
//           <IoCall className="w-8 h-8 text-white" />
//         )}
//       </button>

//       {/* Timer (shows only when call is active) */}
//       {isRecieving && (
//         <div className="mt-4 text-xl font-mono text-gray-600 animate-pulse text-center">
//           <p>Speaking with {isCalling.fullName}</p>
//           <p>{formatTime(callDuration)}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Reciever;

// ------ version 2 ---------
import { ImPhoneHangUp } from "react-icons/im";
import { BiMale, BiFemale } from "react-icons/bi";
import { useState, useEffect } from "react";

const Receiver = ({ handleCall, isReceiving, isCalling }) => {
  const [callDuration, setCallDuration] = useState(0);

  // Format seconds into MM:SS
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Start/stop the timer based on isReceiving
  useEffect(() => {
    let timer;
    if (isReceiving) {
      // Start the timer when receiving a call
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000); // Update every second
    }
    // Cleanup: stop the timer and reset duration when call ends
    return () => {
      clearInterval(timer);
      if (!isReceiving) {
        setCallDuration(0); // Reset timer when call ends
      }
    };
  }, [isReceiving]); // Dependency on isReceiving

  return (
    <div className="flex flex-col items-center justify-center h-[350px] rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 shadow-sm">
      {/* Caller Information */}
      {isCalling && (
        <div className="flex flex-col items-center mb-6">
          <div
            className={`w-20 h-20 rounded-full mb-3 flex items-center justify-center ${
              isCalling.gender === "male" ? "bg-blue-100" : "bg-pink-100"
            }`}
          >
            {isCalling.gender === "male" ? (
              <BiMale className="text-blue-600 text-3xl" />
            ) : (
              <BiFemale className="text-pink-600 text-3xl" />
            )}
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            {isCalling.fullName}
          </h2>
          <span className="text-sm mt-1 text-green-600">
            {isReceiving ? "Call in progress" : "Call ended"}
          </span>
        </div>
      )}

      {/* Timer Display */}
      <div className="bg-white px-6 py-2 rounded-full shadow mb-6">
        <div className="text-lg font-mono font-semibold text-gray-700">
          {formatTime(callDuration)}
        </div>
      </div>

      {/* Hang Up Button */}
      <button
        onClick={handleCall}
        className="transition-all duration-300 p-5 rounded-full shadow-lg 
          bg-red-500 hover:bg-red-600 hover:scale-105"
      >
        <ImPhoneHangUp className="w-7 h-7 text-white" />
      </button>

      {/* Status Message */}
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {isReceiving ? "Tap to end call" : "Call ended"}
        </p>
      </div>
    </div>
  );
};

export default Receiver;
