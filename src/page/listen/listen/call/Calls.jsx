import { useState } from "react";
import Reciever from "./Reciever";
import OnlineCallers from "./OnlineCallers";

const Calls = () => {
  const [isRecieving, setIsRecieving] = useState(false);
  const [activeCallers, setActiveCallers] = useState("");

  const handleCall = (caller) => {
    setIsRecieving(!isRecieving);
    setActiveCallers(caller);
  };

  return (
    <div className="bg-gray-50 w-full h-full relative p-2">
      <section className="m-5 relative bg-white p-4 h-[90%] shadow-md">
        <h1 className="mb-6 font-semibold text-xl text-gray-700">
          Call Center
        </h1>
        {isRecieving ? (
          <Reciever
            isCalling={activeCallers}
            isRecieving={isRecieving}
            handleCall={handleCall}
          />
        ) : null}
        {!isRecieving ? <OnlineCallers handleCall={handleCall} /> : null}
      </section>
    </div>
  );
};

export default Calls;
