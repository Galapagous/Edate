// import { useState } from "react";
// import { FaPaperPlane } from "react-icons/fa";

// const Message = () => {
//   const [listeners] = useState(["Listener 1", "Listener 2", "Listener 3"]);
//   const [activeListener, setActiveListener] = useState(listeners[0]);
//   const [messages, setMessages] = useState({});
//   const [message, setMessage] = useState("");

//   const sendMessage = () => {
//     if (message.trim()) {
//       setMessages((prevMessages) => ({
//         ...prevMessages,
//         [activeListener]: [
//           ...(prevMessages[activeListener] || []),
//           { text: message, sender: "You", time: new Date().toLocaleTimeString() },
//         ],
//       }));
//       setMessage("");
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-4 flex space-x-6 h-[90%]">
//       <div className="w-1/3 p-4 shadow-lg border rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Listeners</h2>
//         <ul>
//           {listeners.map((listener, index) => (
//             <li
//               key={index}
//               className={`cursor-pointer p-2 rounded ${activeListener === listener ? "bg-blue-500 text-white" : "bg-gray-100"}`}
//               onClick={() => setActiveListener(listener)}
//             >
//               {listener}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="w-2/3 p-6 shadow-lg border rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Chat with {activeListener}</h2>
//         <div className="h-48 overflow-y-auto border p-4 rounded bg-gray-100">
//           {(messages[activeListener] || []).map((msg, index) => (
//             <div key={index} className="mb-2">
//               <span className="font-semibold">{msg.sender}: </span>
//               <span>{msg.text}</span>
//               <span className="text-gray-500 text-xs ml-2">({msg.time})</span>
//             </div>
//           ))}
//         </div>
//         <div className="mt-4 flex gap-2">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//           <button onClick={sendMessage} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1">
//             <FaPaperPlane /> Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Message;

// ----- version 2 -------
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Message = () => {
  const [listeners] = useState(["Listener 1", "Listener 2", "Listener 3"]);
  const [activeListener, setActiveListener] = useState(listeners[0]);
  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        text: message,
        sender: "You",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prevMessages) => ({
        ...prevMessages,
        [activeListener]: [...(prevMessages[activeListener] || []), newMessage],
      }));
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 flex space-x-6 h-[90%]">
      {/* Listeners List */}
      <div className="w-1/3 p-4 shadow-lg border rounded-lg bg-white">
        <h2 className="text-lg font-semibold mb-4">Listeners</h2>
        <ul>
          {listeners.map((listener, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded mb-2 transition-colors ${
                activeListener === listener
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => setActiveListener(listener)}
            >
              {listener}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat Window */}
      <div className="w-2/3 p-6 shadow-lg border rounded-lg bg-white flex flex-col">
        <h2 className="text-lg font-semibold mb-4">Chat with {activeListener}</h2>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto border p-4 rounded bg-gray-50 mb-4">
          {(messages[activeListener] || []).map((msg, index) => (
            <div
              key={index}
              className={`mb-3 ${
                msg.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg max-w-[70%] ${
                  msg.sender === "You"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <span>{msg.text}</span>
                <span className="block text-xs mt-1 opacity-70">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border p-2 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-1 transition-colors"
          >
            <FaPaperPlane /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;