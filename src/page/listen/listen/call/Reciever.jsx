import { ImPhoneHangUp } from 'react-icons/im'
import { IoCall } from 'react-icons/io5'

const Reciever = ({handleCall, isRecieving}) => {
  return (
    <div className="flex flex-col items-center justify-center h-[80%] gap-4">
          
          <div className="text-lg font-medium mb-4">
            
          </div>

          {/* Call Button */}
          <button
            onClick={handleCall}
            className={`transition-all duration-300 p-6 rounded-full shadow-lg 
              ${isRecieving
                ? "bg-red-500 hover:bg-red-600 animate-pulse" 
                : "bg-green-500 hover:bg-green-600"
              }`}
          >
            {isRecieving ? (
              <ImPhoneHangUp className="w-8 h-8 text-white animate-bounce"/>
            ) : (
              <IoCall className="w-8 h-8 text-white"/>
            )}
          </button>

          {/* Timer (shows only when call is active) */}
          {isRecieving && (
            <div className="mt-4 text-xl font-mono text-gray-600 animate-pulse">
              00:00
            </div>
          )}
        </div>
  )
}

export default Reciever