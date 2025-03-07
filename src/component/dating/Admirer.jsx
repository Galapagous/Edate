import React, { useState } from 'react'
import { REQUEST_RESPONSE_URL } from '../../constant/resources';
import { useMakerequest } from '../../hook/useMakeRequest';

const Admirer = ({request, setShowModal}) => {
    const [loading, setLoading] = useState(false);

    const makeRequest = useMakerequest()

    const handleResponse = (userId, response)=>{
        setLoading(true)
        makeRequest(
          REQUEST_RESPONSE_URL,
          'POST',
          {
            action:response,
            senderProfileId: userId,
          },
          console.log,
          (err) => {
            console.log(err)
          },
          ()=>{
            setLoading(false)
            setShowModal(false)
          }
        );
      }

    return (
    <div className='flex items-center justify-between w-full space-x-2 text-gray-700'>
      <div className='flex items-center gap-1'>
        <img
          className='w-8 h-8 rounded-full object-cover border-2 border-orange-300 shadow-sm'
          src={request?.profilePicture}
          alt='sender'
        />
        <p>{request?.firstName} {request?.sender?.lastName}</p>
      </div>
      <div className='flex items-center justify-end gap-1'>
        <button disabled={loading} onClick={()=>{handleResponse(request?._id, 'accept')}} className='py-2 px-4 rounded-sm bg-gray-600 text-white hover:bg-green-500'>Accept</button>
        <button disabled={loading} onClick={()=>{handleResponse(request?._id, 'reject')}} className='py-2 px-4 rounded-sm bg-gray-600 text-white hover:bg-red-500'>Reject</button>
      </div>
    </div>
  )
}

export default Admirer