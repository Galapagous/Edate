import { useState } from "react";
import { conversations, listenerData } from "./data";
import { FaPaperPlane, FaUser } from "react-icons/fa";

const Message = () => {
  const [activeConversation, setActiveConversation] = useState(0);
  // const [currentConversation, setCurrentConversation] = useState(conversations);
  const currentConversation = conversations[activeConversation];
  const handleSelection = (index) => {
    setActiveConversation(index);
  };

  return (
    <div className="w-full h-full bg-gray-50 grid grid-cols-4">
      {/* --- list of listeners online ---- */}
      <div className="col-span-1 h-full">
        {listenerData.map((eachListener, index) => {
          return (
            <div
              key={index}
              className={`${
                index === activeConversation
                  ? "bg-white border-l-2 border-red-500"
                  : ""
              } cursor-pointer hover:bg-gray-200`}
              onClick={() => {
                handleSelection(index);
              }}
            >
              <div className="p-2 flex items-start justify-start gap-2">
                <img
                  src={eachListener?.profile}
                  alt="chat profile"
                  className="w-10 h-10 rounded-md border-2 object-cover"
                />
                <div className="text-sm flex flex-col items-start justify-between h-full">
                  <p className="font-semibold text-gray-800">
                    {eachListener?.fullName}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {eachListener?.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-span-3 p-2 h-[140%]">
        <nav className="w-full shadow-md p-2">
          {
            <div className="flex items-start justify-start gap-1">
              <img
                src={listenerData[activeConversation].profile}
                className="w-10 h-10 rounded-full object-cover"
                alt="user profile"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  {listenerData[activeConversation].fullName}
                </p>
                <p className="text-xs text-gray-600">Active Now</p>
              </div>
            </div>
          }
        </nav>
        <div className="mt-1 bg-white p-3 h-full relative">
          {currentConversation?.message?.map((conversation, index) => {
            return (
              <div key={index} className="mb-1">
                {
                  <div>
                    <div
                      className={`flex items-start ${
                        conversation.from === "me"
                          ? "justify-end"
                          : "justify-start"
                      } gap-2`}
                    >
                      {conversation.from === "me" ? (
                        <FaUser />
                      ) : (
                        <img
                          src={listenerData[activeConversation].profile}
                          alt="chat profile"
                          className="w-6 h-6 rounded-md border-2 object-cover"
                        />
                      )}
                      <div className="text-sm p-2 bg-gray-200 flex flex-col items-start justify-between h-full min-w-[100px]">
                        <p className="font-semibold w-full text-gray-800">
                          {conversation.from === "me"
                            ? "You"
                            : listenerData[activeConversation].fullName}
                        </p>
                        <p className="text-gray-600 w-full text-xs">
                          {conversation.content}
                        </p>
                      </div>
                    </div>
                  </div>
                }
              </div>
            );
          })}
          <form className="flex absolute border-2 bottom-0 left-0 items-center justify-center w-full">
            <input
              className="w-full p-1 outline-none"
              type="text"
              placeholder="type your message"
            />
            <button className="px-4 bg-green-600 text-white py-2 rounded-sm">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Message;
