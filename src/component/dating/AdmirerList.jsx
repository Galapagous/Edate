import React, { useState } from 'react'
import { BiUser } from 'react-icons/bi'
import { GrLike } from 'react-icons/gr'

const AdmirerList = ({admirers, requests}) => {

  const [activeTab, setActiveTab] = useState("request")

  const handleSwitchTab = (tab)=>{
    setActiveTab(tab)  // Call the request function with the new tab
  }
    return (
    <div className="flex flex-col items-center space-x-2 text-gray-700 w-full mt-5">
     <div className='w-full flex items-center justify-start gap-2 border-b-2 border-blue-400 mb-2'>
      <button onClick={()=>{handleSwitchTab('request')}} className={`${activeTab === "request" ? "bg-blue-700 text-white" : "bg-gray-500 text-white"} text-gray-600 px-4 py-2 `}>Request</button>
      <button onClick={()=>{handleSwitchTab('admirer')}} className={`${activeTab === "admirer" ? "bg-blue-700 text-white" : "bg-gray-500 text-white"} text-gray-600 px-4 py-2 `}>Admirer</button>
     </div>

     {/* content */}
      <div className='mt-3 flex items-center justify-center flex-col'>
        {
          activeTab === "request"? 
          <div className='flex flex-col items-center justify-center'>
            <BiUser className='text-blue-700'/>
            <p>You have {requests.length} request</p>
          </div> 
          : 
          null  
        }
        {
          activeTab === "admirer"? 
          <div className='flex flex-col items-center justify-center'>
            <GrLike/>
            <p>You have {admirers?.length} admirers</p>
          </div> 
          : 
          null  
        }
      </div>
      <div className='mt-3 w-full'>
        {activeTab === "request" ?
          requests?.map((request, index)=>{
            return(
              <div key={index} className='flex items-center justify-start w-full space-x-2 text-gray-700'>
                <img
                  className='w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm'
                  src={request?.profilePicture}
                  alt='sender'
                />
                <p>{request?.firstName} {request?.sender?.lastName}</p>
              </div>
            )
          }) : null
        }

        {activeTab === "admirer" ?
          admirers?.map((admirer, index)=>{
            return(
              <div key={index} className='flex items-center justify-start w-full space-x-2 text-gray-700'>
                <img
                  className='w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm'
                  src={admirer?.profilePicture}
                  alt='sender'
                />
                <p>{admirer?.firstName} {admirer?.lastName}</p>
              </div>
            )
          }) : null
        }
      </div>
    </div>
  )
}

export default AdmirerList